from django.urls import path, include
from rest_framework.routers import DefaultRouter
from app import (
    viewsets
)

urlpatterns = []

urlpatterns += [
    path('', include('rest_auth.urls')),
    path('registration/', include('rest_auth.registration.urls'))
]
