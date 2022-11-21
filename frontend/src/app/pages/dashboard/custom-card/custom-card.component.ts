import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationModule } from 'src/app/core/module/notification/notification.module';
import { AwesomeAPIService } from 'src/app/service/api/awesomeapi.service';
import { KrakenAPIService } from 'src/app/service/api/krakenapi.service';
import { UserService } from 'src/app/service/user/user.service';

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

  isBitcoin: boolean = false;

  hasDescription: boolean = false;

  value: number = 0;

  code: string = 'USD';

  codein: string = 'USD';


  constructor(private awesomeService: AwesomeAPIService, private krakenService: KrakenAPIService,
    public notification: NotificationModule,
    private translate: TranslateService) { }

  ngOnInit() {
    this.getTickerByAPI(this.ticker, this.api);
  }

  getCodes(key) {
    let code_split = key.split('Z');
    let code = code_split[0].replace('XX', '') + 'C';
    let codein = code_split[1]
    console.log(code, codein);
    return [code, codein];
  }

  getTickerByAPI(ticker, api) {
    if (api === 'awesome') {
      this.awesomeService.getTicker(ticker).subscribe(data => {
        let key = Object.keys(data)[0];
        this.value = data[key].bid;
        this.code = data[key].code;
        this.codein = data[key].codein;
      });
    } else if (api === 'kraken') {
      this.isBitcoin = true;
      this.krakenService.getTicker(ticker).subscribe(data => {
        let key = Object.keys(data)[0];
        let identifiedCodes = this.getCodes(key);
        this.value = data[key].a[0];
        this.code = identifiedCodes[0];
        this.codein = identifiedCodes[1];
      });
    }
  }

}
