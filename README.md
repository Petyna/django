# npr211-python_web

Begin Python
```
python --version
pip -V

python -m venv npr211.venv
npr211.venv\Scripts\activate.bat
python -m pip install Django
python
import django
print(django.get_version())
exit()
deactivate

npr211.venv\Scripts\activate.bat
django-admin startproject webproject
cd webproject
python manage.py runserver

cd webproject
d:\Study\2024\43.Phyton_Web\Projects\npr211.venv\Scripts\activate
python manage.py startapp oneapp

--oneapp/view.py---
from django.http import HttpResponse
def index(request):
    return HttpResponse("Hello World")

--setting.py--
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'oneapp'
]

--webproject/urls.py--
from django.urls import path
from oneapp import views
urlpatterns = [
#     path('admin/', admin.site.urls),
    path('',views.index, name="oneapp"),
]

python manage.py runserver
```
