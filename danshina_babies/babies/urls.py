from django.urls import path, include

from babies import views

urlpatterns = [
    path('babies/<baby_id>/', views.BabyDetail.as_view()),
    path('babies/', views.AllBabiesDetail.as_view()),
    path('babies-confirmed/', views.ConfirmedBabiesDetail.as_view()),
    path('baby/', views.BabyUpload.as_view())
]
