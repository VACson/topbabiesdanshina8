from django.urls import path, include

from babies import views

urlpatterns = [
    path('babies/<baby_id>/', views.BabyDetail.as_view()),
]
