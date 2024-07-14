from django.urls import path
from .views import *

urlpatterns = [
    path("",loginuser,name="loginuser"),
    path("signout/",signout,name="signout"),
    path("reset/",changepassword,name="changepassword"),
    path("adminuser/",adminuser,name="adminuser"),
]