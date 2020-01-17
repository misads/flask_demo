from flask import request, redirect, url_for, session, abort
import functools


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
