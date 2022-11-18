from django.urls import path, include

from app.awesomeapi import viewsets as awesomeapi_viewsets
from app.krakenapi import viewsets as krakenapi_viewsets

urlpatterns = []

urlpatterns += [
    path('', include('rest_auth.urls')),
    path('registration/', include('rest_auth.registration.urls')),
    path('awesome/', awesomeapi_viewsets.TickerView.as_view()),
    path('awesome/tickers/', awesomeapi_viewsets.GetAllTickersView.as_view()),
    path('awesome/history/', awesomeapi_viewsets.TickerHistoryView.as_view()),
    path('awesome/combinations/', awesomeapi_viewsets.GetAllAvailableCombinationsView.as_view()),
    path('kraken/', krakenapi_viewsets.TickerView.as_view()),
]
