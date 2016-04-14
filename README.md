# Charla jQuery
Charla de introducción a jQuery para Programa ETSIIT de capacitación profesional 2015/2016.

_Código_ liberado bajo licencia **GNU GENERAL PUBLIC LICENSE Version 3**.

_Texto_ liberado bajo la licencia **Creative Commons Attribution-ShareAlike 4.0 International**.

<p align="center">
<a href="http://www.gnu.org/licenses/gpl-3.0.html">
<img alt="GPL-3.0" src="https://dl.dropboxusercontent.com/s/t0ylvis7f1stcu7/GPL-3.0.png">
</a>
<a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">
<img alt="CC-BY-SA-4.0" src="https://dl.dropboxusercontent.com/s/sb421l5usayaigo/CC-BY-SA-4.0.png">
</a>
</p>

## [Enlace a la  presentación](http://germaaan.github.io/Charla_jQuery/)

## Instalación de aplicación de ejemplo:

### Base de datos:
```
sudo apt-get install postgresql

sudo su - postgres
wget https://raw.githubusercontent.com/germaaan/calificaPelis/master/conf/db_create.sql
psql -U postgres -f db_create.sql
exit
```

### Aplicación:
```
wget -qO- https://deb.nodesource.com/setup_4.x | sudo bash -
sudo apt-get install -y nodejs

cd calificaPelis
npm install
npm [start|restart|stop]
```

### Acceso:
[http://localhost:3434/](http://localhost:3434/)
