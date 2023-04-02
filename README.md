# hepat-state

Back Django :
-supprimer les fichiers de migrations souf le fichier init
-mysql :
*Ouvrir la console MySQL ou une application qui vous permetre de créer une base de donnée
mysql -u root -p
password : password ,  // si le mot de pass n'est pas 'password', donc c'est a changer dans le fichier setings.py

*Création de la bd:
create database projet_hepatite;


Lancer l'application
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
Front Angular :
-instalation du packages :
npm install ou npm install --force.
-lancer l'application:
ng serve
