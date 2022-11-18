from django.urls import path, include

from app import (
    viewsets
)

urlpatterns = []

urlpatterns += [
    path('', include('rest_auth.urls')),
    path('registration/', include('rest_auth.registration.urls')),
    path('tickers/', viewsets.GetAllTickersView.as_view()),
    path('', viewsets.TickerView.as_view()),
    path('history/', viewsets.TickerHistoryView.as_view()),
    path('combinations/', viewsets.GetAllAvailableCombinationsView.as_view()),
]
