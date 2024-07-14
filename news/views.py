from django.shortcuts import render, redirect, get_object_or_404
from .models import *
from django.contrib import messages
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required(login_url='loginuser')
def getnews(request):
    category_name=Category.objects.all()
    articles_latest=Articles.objects.order_by('-publish_date')
    headlines=Headlines.objects.all().order_by('-publish_date')
    return render(request, 'home.html', {'category_name': category_name, 'articles_latest':articles_latest, 'headlines':headlines})

@login_required(login_url='loginuser')
def getnewsbycategory(request, category_slug):
    category_name = Category.objects.all()
    category = get_object_or_404(Category, slug=category_slug)
    articles_latest = Articles.objects.filter(category_list=category).order_by('-publish_date')
    return render(request, 'home.html', {'category': category, 'articles_latest': articles_latest, 'category_name': category_name})


def postnews(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    if request.method=="POST":
        newstitle=request.POST.get("news_title")
        newsdescription=request.POST.get("postnews_description",'')
        newsimage=request.FILES.get("news_image")
        categorytype_id = request.POST.get("category_type")
        category_instance = Category.objects.get(id=categorytype_id)
        user = request.user
        if Articles.objects.filter(title__iexact=newstitle).first():
            messages.info(request, "News Title already saved")
            return redirect('home')
        queryset=Articles.objects.create(title=newstitle, description=newsdescription, image=newsimage, category_list=category_instance, user=user)
        queryset.save()
        messages.success(request,"News Posted Successfully")
        return redirect("home")
    return render(request,"home.html")

@login_required(login_url='loginuser')
def full_article_view(request, article_slug):
    article = get_object_or_404(Articles, slug=article_slug)
    category_name=Category.objects.all()
    return render(request, 'output.html', {'article': article, 'category_name': category_name})

def full_headline_view(request,slug):
    article=get_object_or_404(Headlines, slug=slug)
    category_name=Category.objects.all()
    return render(request,"output.html",{'article':article, 'category_name': category_name})

def addcategory(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    if request.method=="POST":
        categoryname=request.POST.get("category_name")
        user=request.user
        if Category.objects.filter(name__iexact=categoryname).first():
            messages.info(request,"Category already registered")
            return redirect("home")
        query=Category.objects.create(name=categoryname, user=user)
        query.save()
        messages.success(request,"Category added successfully")
        return redirect("home")
    

def deletepost(request, slug):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    if request.method == "POST":
        try:
            article = get_object_or_404(Articles, slug=slug)
            article.delete()
            messages.success(request, "Post Deleted Successfully")
            return redirect("home")
        except Articles.DoesNotExist:
            messages.error(request, "Article does not exist.")
            return redirect("home")
    return render(request, "home.html")


def update_article(request, article_slug):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    article = get_object_or_404(Articles, slug=article_slug)
    categories = Category.objects.all()
    
    if request.method == "POST":
        article.title = request.POST.get("news_title")
        article_description = request.POST.get("updatenews_description")
        article.description=article_description
        if Articles.objects.filter(title__iexact=request.POST.get("news_title")).exclude(id=article.id).first():
            messages.info(request, "News Title already exists with another article.")
            return redirect('home')
        if request.FILES.get("news_image"):
            article.image = request.FILES.get("news_image")
        category_id = request.POST.get("category_type")
        category_instance = Category.objects.get(id=category_id)
        article.category_list = category_instance
        article.user=request.user
        article.save()
        messages.success(request, "Article Updated Successfully")
        return redirect("home")
    return render(request, "home.html", {'article': article, 'categories': categories})


def add_headlines(request):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    if request.method=="POST":
        title=request.POST.get("headlines_title")
        description=request.POST.get("headlines_description")
        image=request.FILES.get("headlines_image")
        if Headlines.objects.filter(title__iexact=title).first():
            messages.info(request, "News Title already exists with another article.")
            return redirect('home')
        query_set=Headlines.objects.create(title=title, description=description, image=image, user=request.user)
        query_set.save()
        messages.success(request,"Headline Added Successfully")
        return redirect("home")
    return render(request,"home.html")


def deleteheadlines(request, slug):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    if request.method == "POST":
        try:
            headlines = get_object_or_404(Headlines, slug=slug)
            headlines.delete()
            messages.success(request, "Headline Deleted Successfully")
            return redirect("home")
        except Articles.DoesNotExist:
            messages.error(request, "Article does not exist.")
            return redirect("home")
    return render(request, "home.html")

def update_headline(request, article_slug):
    if not request.user.is_superuser:
        messages.error(request, "You are not authorized to perform this action.")
        return redirect("home")
    article = get_object_or_404(Headlines, slug=article_slug)
    categories = Category.objects.all()
    
    if request.method == "POST":
        article.title = request.POST.get("headlinenews_title")
        article_description = request.POST.get("updateheadlinenews_description")
        article.description=article_description
        article.user=request.user
        if Headlines.objects.filter(title__iexact=request.POST.get("headlinenews_title")).exclude(id=article.id).first():
            messages.info(request, "News Title already exists with another headline.")
            return redirect('home')
        if request.FILES.get("headlinenews_image"):
            article.image = request.FILES.get("headlinenews_image")
        article.save()
        messages.success(request, "Headline Updated Successfully")
        return redirect("home")
    return render(request, "home.html", {'article': article, 'categories': categories})