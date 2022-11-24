import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationModule } from 'src/app/core/module/notification/notification.module';
import { AwesomeAPIService } from 'src/app/service/api/awesomeapi.service';
import { KrakenAPIService } from 'src/app/service/api/krakenapi.service';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.css']
})
export class CustomCardComponent implements OnInit {

  @Input()
  ticker: string;

  @Input()
  api: string;

  isBitcoin = false;

  hasDescription = false;

  value = 0;

  code = 'USD';

  codein = 'USD';


  constructor(private awesomeService: AwesomeAPIService, private krakenService: KrakenAPIService,
    public notification: NotificationModule,
    private translate: TranslateService) { }

  ngOnInit() {
    this.getTickerByAPI(this.ticker, this.api);
    if (this.api === 'awesome') {
      setInterval(() => {
        this.getTickerByAPI(this.ticker, this.api);
      }, 30000);
    } else if (this.api === 'kraken') {
      setInterval(() => {
        this.getTickerByAPI(this.ticker, this.api);
      }, 1000);
    }
  }

  getCodes(key) {
    const code_split = key.split('Z');
    const code = code_split[0].replace('XX', '') + 'C';
    const codein = code_split[1];
    return [code, codein];
  }

  getTickerByAPI(ticker, api) {
    if (api === 'awesome') {
      this.awesomeService.getTicker(ticker).subscribe(data => {
        const key = Object.keys(data)[0];
        this.value = data[key].bid;
        this.code = data[key].code;
        this.codein = data[key].codein;
      });
    } else if (api === 'kraken') {
      this.isBitcoin = true;
      this.krakenService.getTicker(ticker).subscribe(data => {
        const key = Object.keys(data)[0];
        const identifiedCodes = this.getCodes(key);
        this.value = data[key].a[0];
        this.code = identifiedCodes[0];
        this.codein = identifiedCodes[1];
      });
    }
  }

}
