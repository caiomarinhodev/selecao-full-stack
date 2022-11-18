from rest_framework.response import Response
from rest_framework.views import APIView

from app.krakenapi.kraken_api import get_ticker


class TickerView(APIView):
    authentication_classes = []

    def get(self, request, format=None):
        ticker = request.GET.get('ticker')
        try:
            ticker = get_ticker(ticker)
        except Exception as e:
            return Response({'error': str(e)})
        return Response(ticker)
