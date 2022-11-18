import requests

AWESOME_API_URL_BASE = 'https://economia.awesomeapi.com.br'
AWESOME_API_JSON = 'json'
AWWSOME_API_XML = 'xml'


def get_ticker(ticker):
    return requests.get('{base}/{type}/{time}/{ticker}'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON,
                                                               time='last', ticker=ticker)).json()


def get_history_ticker(ticker, qtd_days):
    return requests.get('{base}/{type}/{time}/{ticker}/{days}'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON,
                                                                      time='daily', ticker=ticker,
                                                                      days=str(qtd_days))).json()


def get_all_tickers():
    return requests.get('{base}/{type}/available/uniq'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON)).json()


def get_all_available_combinations():
    return requests.get('{base}/{type}/available'.format(base=AWESOME_API_URL_BASE, type=AWESOME_API_JSON)).json()
