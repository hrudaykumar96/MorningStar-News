from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def create_user(self,email,name,password=None, **extra_fields):
        if not email:
            raise ValueError("Email Required")
        email=self.normalize_email(email)
        user=self.model(email=email,name=name,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user


    def create_superuser(self,email,name,password=None,**extra_fields):
        extra_fields.setdefault("is_staff",True)
        extra_fields.setdefault("is_superuser",True)
        return self.create_user(email,name,password,**extra_fields)
    

class CustomUser(AbstractBaseUser, PermissionsMixin):
    email=models.EmailField(unique=True)
    name=models.CharField(max_length=50)
    is_staff=models.BooleanField(default=False)
    is_superuser=models.BooleanField(default=False)
    date_joined=models.DateTimeField(default=timezone.now)

    objects=CustomUserManager()

    USERNAME_FIELD="email"
    REQUIRED_FIELDS=['name']

    def __str__(self):
        return self.email