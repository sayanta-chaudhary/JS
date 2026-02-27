https://wiki.archlinux.org/title/MariaDB
https://youtu.be/W2PY3A32LzY?si=kIuk6E0zIvB7fSR2

sudo mariadb-upgrade --user=mysql --basedir=/usr --datadir=/var/lib/mysql
sudo mariadb-secure-installation

mariadb -u root -p -h 127.0.0.1 -P 3306 # login as root
ALTER USER 'root'@'localhost' IDENTIFIED BY 'pswd'; # change the root pswd

CREATE USER 'bot'@'localhost' IDENTIFIED BY 'pswd';
GRANT ALL PRIVILEGES ON _._ TO 'bot'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

SELECT USER(); # who
SELECT USER, HOST FROM mysql.user;

sudo rm -rf /var/lib/mysql/_ # reset
sudo rm -rf /etc/my.cnf
sudo rm -rf /etc/my.cnf.d/_

<!-- mariadb://bot:pswd@localhost/college -->
