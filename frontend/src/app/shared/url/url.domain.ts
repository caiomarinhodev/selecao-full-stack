'use strict';



export const API_VERSION = 'v1';

/**
 * Default URL of the back-end server.
 *
 * @type {string}
 */
export const SERVER_URL = 'http://localhost:8000/api/';
// export const SERVER_URL = 'https://backendcotacoes.onrender.com/api/';

/**
 * URLs for Login.
 */
export namespace AuthURL {
  export const BASE = 'auth/';
  export const LOGIN = BASE + 'login/';
  export const LOGOUT = BASE + 'logout/';
  export const REGISTER = BASE + 'register/';
}


/**
 * URLs for Organization entity.
 */
export namespace KrakenURL {
  export const BASE = 'kraken/';

}

export namespace AwesomeURL {
  export const BASE = 'awesome/';
  export const GET_COMBINATIONS = BASE + 'combinations/';
  export const GET_TICKERS = BASE + 'tickers/';
  export const GET_HISTORY = BASE + 'history/';
}
