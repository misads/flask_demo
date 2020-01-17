# Fundin.top
<p>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-Apache-brightgreen.svg" alt="License">
    </a>
</p>

A fund analysis & recommendation website.

## Highlights

- [x] Overall and individual fund pricing situation.
- [x] Favoutite funds staring and history analysis.
- [x] Trend track & Recommendation.

![feature1](http://www.xyu.ink/wp-content/uploads/2020/01/feature1.png)

![feature2](http://www.xyu.ink/wp-content/uploads/2020/01/feature2.png)

### Online Experience

　　An Online demo is available [here](http://www.xyu.ink:8888).

## Installation

 1. Run `./prepare.sh` to install dependencies (for ubuntu).

 2. Set MySql password.

 3. Modify sqlalchemy database url in [app/config.py](https://github.com/misads/flask_dempo/echarts/app/config.py) :

    ```python
    SQLALCHEMY_DATABASE_URI='mysql://root:your_root_password@localhost:3306/flask
    ```

## Docker Image

We also provide a [Dockerfile](https://github.com/mingyuliutw/UNIT/blob/master/Dockerfile) for building an environment for running the code.

```bash
docker build -t flask:v2 .  # 构建镜像

docker run -di -p 80:8000 -e MYSQL_ROOT_PASSWORD=123456 -v /Users/xhy/commits/flask_demo:/opt/flask flask:v2  # 启动容器 映射端口并挂载硬盘

# d558fef44828759e0dea9a097cd341c29a2df72b3644d20cb959b265d130cae5

docker exec -it d558fe /bin/bash  # 运行shell
```

## Deploy

Run in debug mode:

```bash
# !-bash
python serve.py
```

Use gunicorn to start this demo in production environment:

```bash
gunicorn --bind 0.0.0.0:8000 -w 4 "app:create_app()"
```

Import initialization data:

```bash
mysql -u root -p flask < fund.sql
```

