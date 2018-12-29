#!/bin/sh
export LC_ALL=C
sudo apt-get update
sudo apt-get install -y mysql-server
sudo apt-get -y install libmysqlclient-dev
sudo apt-get install build-essential python-dev python-pip libffi-dev -y
pip install -r requirements.txt

# start mysql service
/etc/init.d/mysql start

