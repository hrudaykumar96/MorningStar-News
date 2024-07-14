from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from users.models import CustomUser
from django.utils.html import strip_tags

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(unique=True, blank=True)
    user=models.ForeignKey(CustomUser,on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

class Articles(models.Model):
    title=models.CharField(max_length=1000)
    description=models.TextField()
    image=models.ImageField(upload_to="images/")
    publish_date=models.DateTimeField(default=timezone.now)
    category_list=models.ForeignKey(Category,on_delete=models.CASCADE)
    slug = models.SlugField(unique=True, blank=True)
    user=models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content=models.TextField()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        self.content = strip_tags(self.description)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    

class Headlines(models.Model):
    title=models.CharField(max_length=1000)
    description=models.TextField()
    image=models.ImageField(upload_to="images/")
    publish_date=models.DateTimeField(default=timezone.now)
    slug = models.SlugField(unique=True, blank=True)
    user=models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    content=models.TextField()

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        self.content = strip_tags(self.description)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title