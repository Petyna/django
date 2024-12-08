from django.shortcuts import render, redirect   
from django.contrib.auth.forms import UserCreationForm, User
from django.contrib import messages

# Create your views here.
def register_view(request):
    form = UserCreationForm()
    return render(request,"users/register.html", { "form": form })

def login_view(request):
    form = UserCreationForm()
    return render(request,"users/login.html", { "form": form })