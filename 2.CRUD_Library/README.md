# npr211-python_web

https://data-flair.training/blogs/django-crud-example/
https://github.com/Karan-S-Mittal/LibraryApp/tree/master

Begin Python
```
python --version
pip -V

python -m venv library
library\Scripts\activate.bat
python -m pip install Django
python.exe -m pip install --upgrade pip
django-admin startproject libraryapp
cd libraryapp
python manage.py startapp book

pip install pillow
python manage.py makemigrations
python manage.py migrate

pip install mysqlclient
CREATE DATABASE libraryapp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
python manage.py migrate


python manage.py createsuperuser

python manage.py runserver
exit()
deactivate
