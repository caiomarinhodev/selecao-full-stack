from rest_framework.response import Response
from rest_framework.views import APIView

from .awesome_api import get_all_tickers, get_ticker, get_history_ticker, get_all_available_combinations


class GetAllTickersView(APIView):
    authentication_classes = []

    def get(self, request, format=None):
        tickers = get_all_tickers()
        # TODO: IMPLEMENT raise error if tickers is None
        return Response(tickers)


class TickerView(APIView):
    authentication_classes = []

    def get(self, request, format=None):
        ticker = request.GET.get('ticker')
        ticker = get_ticker(ticker)
        # TODO: IMPLEMENT raise error if ticker is not found
        return Response(ticker)


class TickerHistoryView(APIView):
    authentication_classes = []

    def get(self, request, format=None):
        ticker = request.GET.get('ticker')
        days = request.GET.get('days')
        history_ticker = get_history_ticker(ticker, days)
        return Response(history_ticker)


class GetAllAvailableCombinationsView(APIView):
    authentication_classes = []

    def get(self, request, format=None):
        combinations = get_all_available_combinations()
        return Response(combinations)
