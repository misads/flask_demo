from flask import current_app as app, request, redirect, url_for, session, abort, jsonify
import functools
from app.models import db, Cache
from app.utils.misc_utils import get_time_stamp
import re


def authed_only(f):
    """
    Decorator that requires the user to be authenticated
    :param f:
    :return:
    """
    @functools.wraps(f)
    def authed_only_wrapper(*args, **kwargs):
        if session.get('id'):
            return f(*args, **kwargs)
        else:
            return redirect('/login')

    return authed_only_wrapper


def get_ip(req=None):
    """ Returns the IP address of the currently in scope request. The approach is to define a list of trusted proxies
     (in this case the local network), and only trust the most recently defined untrusted IP address.
     Taken from http://stackoverflow.com/a/22936947/4285524 but the generator there makes no sense.
     The trusted_proxies regexes is taken from Ruby on Rails.
     This has issues if the clients are also on the local network so you can remove proxies from config.py.
     CTFd does not use IP address for anything besides cursory tracking of teams and it is ill-advised to do much
     more than that if you do not know what you're doing.
    """
    if req is None:
        req = request
    trusted_proxies = app.config['TRUSTED_PROXIES']
    combined = "(" + ")|(".join(trusted_proxies) + ")"
    route = req.access_route + [req.remote_addr]
    for addr in reversed(route):
        if not re.match(combined, addr):  # IP is not trusted but we trust the proxies
            remote_addr = addr
            break
    else:
        remote_addr = req.remote_addr
    return remote_addr


def ratelimit(method="POST", limit=50, interval=300, key_prefix="rl"):
    def ratelimit_decorator(f):
        @functools.wraps(f)
        def decorated_function(*args, **kwargs):
            ip_address = get_ip()
            key = "{}:{}:{}".format(key_prefix, ip_address, request.endpoint)
            current = Cache.query.filter_by(key=key).first()

            if request.method == method:
                if current:
                    if int(get_time_stamp()) - int(current.value) < interval:
                        resp = jsonify([
                           "Too many requests. Please try again %s seconds later." % interval
                        ])
                        # resp.status_code = 429
                        return resp
                    else:
                        current.value = get_time_stamp()

                else:
                    time_stamp = get_time_stamp()
                    new_current = Cache(key, time_stamp, '')
                    db.session.add(new_current)

                db.session.commit()
                #
                # and int(current) > limit - 1:  # -1 in order to align expected limit with the real value
                #
                #
                # else:
                #     if not current:
                #         cache.set(key, 1, timeout=interval)
                #     else:
                #         cache.set(key, int(current) + 1, timeout=interval)
            return f(*args, **kwargs)

        return decorated_function

    return ratelimit_decorator