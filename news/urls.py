from django.urls import path
from .views import *

urlpatterns = [
    path("home/",getnews, name="home"),
    path("home/",getnewsbycategory, name="getnewsbycategory"),
    path("post/",postnews, name="postnews"),
    path('article/<slug:article_slug>/', full_article_view, name='full_article'),
    path('category',addcategory, name="add_category"),
    path('deletepost/<slug:slug>/',deletepost,name="delete_post"),
    path('deleteheadline/<slug:slug>/',deleteheadlines,name="delete_headlines"),
    path('updatearticle/<slug:article_slug>/', update_article, name='update_article'),
    path('updateheadline/<slug:article_slug>/', update_headline, name='update_headline'),
    path('news/<slug:category_slug>/', getnewsbycategory, name='news_by_category'),
    path('newsheadlines/<slug:slug>/',full_headline_view, name="headline"),
    path('headline/',add_headlines, name="post_headline"),
]