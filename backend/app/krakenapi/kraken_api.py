import requests

from app.exceptions import NotFoundError

KRAKEN_URL_BASE = 'https://api.kraken.com/0/public/Ticker?pair='


def get_ticker(ticker):
    req = requests.get('{base}{ticker}'.format(base=KRAKEN_URL_BASE, ticker=ticker))
    if req.status_code == 200:
        return req.json()['result']
    else:
        raise NotFoundError('Ticker not found')
