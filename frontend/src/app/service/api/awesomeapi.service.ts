import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AwesomeURL } from 'src/app/shared/url/url.domain';
import { BaseService } from '../../core/interface/base.service';


/**
 * Service for Awesome API.
 */
@Injectable()
export class AwesomeAPIService extends BaseService {

    getTicker(ticker) {
        return this.get(AwesomeURL.BASE + '?ticker=' + ticker);
    }

    getAllAvailableTickers() {
        return this.get(AwesomeURL.GET_TICKERS);
    }

    getHistoryTicker(ticker, days) {
        return this.get(AwesomeURL.GET_HISTORY + '?ticker=' + ticker + '&days=' + days);
    }

    getAllAvailableCombinations() {
        return this.get(AwesomeURL.GET_COMBINATIONS);
    }

}

