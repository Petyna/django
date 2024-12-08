# npr211-python_web MVC

py --version
py -m venv .venv
.venv\Scripts\activate.bat
deactivate

code .
Install 
Django
vscode-icons

.venv\Scripts\activate.bat
py -m pip install Django
py -m pip install -U pip
py
>>>import django
>>>print(django.get_version())
>>>quit()

django-admin startproject myblog
cd myblog
py manage.py runserver 9178

-------App and Templates--------
.venv\Scripts\activate.bat
cd myblog
py manage.py startapp posts
py manage.py runserver 9178

py manage.py migrate
py manage.py makemigrations
py manage.py migrate

-------Testing Django ORM------
py manage.py shell
from posts.models import Post
p=Post()
p
p.title="Перша новина. Смачна ковбаса!"
p.save()
Post.objects.all()
exit()

--model Post add str--

py manage.py shell
from posts.models import Post
p=Post()
p
p.title="Друга новина. Вареники з чорницями!"
p.save()
Post.objects.all()
exit()

-----Django admin-----
py manage.py runserver 9178
http://localhost:9178/admin
ctrl+C
py manage.py createsuperuser
vova

Qwerty1-
Qwerty1-
py manage.py runserver 9178

-----Upload image------
.venv\Scripts\activate.bat
cd myblog
pip install Pillow
-----Add Post col ImageField----
py manage.py makemigrations
py manage.py migrate

--------Register---------
.venv\Scripts\activate.bat
cd myblog
py manage.py runserver 9178
ctrl+C
py manage.py startapp users
py manage.py runserver 9178


--------Register User---------
.venv\Scripts\activate.bat
cd myblog
py manage.py runserver 9178