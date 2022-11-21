import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { KrakenURL } from 'src/app/shared/url/url.domain';
import { BaseService } from '../../core/interface/base.service';


/**
 * Service for kraken API.
 */
@Injectable()
export class KrakenAPIService extends BaseService {

    getTicker(ticker) {
        return this.get(KrakenURL.BASE + '?ticker=' + ticker);
    }


}

