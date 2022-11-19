import requests

from app.exceptions import NotFoundError

AWESOME_API_URL_BASE = 'https://economia.awesomeapi.com.br'
AWESOME_API_JSON = 'json'
AWWSOME_API_XML = 'xml'


# TODO: Create diff apps for each API and change URL'S
# TODO: Documentation of all methods and classes
# TODO: README
# TODO: Tests DRF testing
# TODO: Postman tests file
# TODO: Docker
# TODO: Remove unused files
def get_ticker(ticker):
    req = requests.get('{base}/{type}/{time}/{ticker}'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON,
                                                              time='last', ticker=ticker))
    if req.status_code == 200:
        return req.json()
    else:
        raise NotFoundError('Ticker not found')


def get_history_ticker(ticker, qtd_days):
    req = requests.get('{base}/{type}/{time}/{ticker}/{days}'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON,
                                                                     time='daily', ticker=ticker,
                                                                     days=str(qtd_days)))
    if req.status_code == 200:
        return req.json()
    else:
        raise NotFoundError('Ticker not found')


def get_all_tickers():
    req = requests.get('{base}/{type}/available/uniq'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON))
    if req.status_code == 200:
        return req.json()
    else:
        raise NotFoundError('Ticker not found')


def get_all_available_combinations():
    req = requests.get('{base}/{type}/available'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON))
    if req.status_code == 200:
        return req.json()
    else:
        raise NotFoundError('Ticker not found')
