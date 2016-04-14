```
sudo apt-get install postgresql

sudo su - postgres
wget https://raw.githubusercontent.com/germaaan/calificaPelis/master/conf/db_create.sql
psql -U postgres -f db_create.sql
exit
```
