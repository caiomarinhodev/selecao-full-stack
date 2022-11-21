import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { NgxLoadingModule } from 'ngx-loading';
import { AwesomeAPIService } from 'src/app/service/api/awesomeapi.service';
import { KrakenAPIService } from 'src/app/service/api/krakenapi.service';
import { AngularMaterialModule } from 'src/app/shared/interface/angular-material.module';
import { CustomCardComponent } from './custom-card.component';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        CustomCardComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        NgxLoadingModule.forRoot({
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#0082f0',
            secondaryColour: '#0082f0',
            tertiaryColour: '#0082f0'
        }),
        AngularMaterialModule,
    ],
    exports: [
        CustomCardComponent
    ],
    providers: [
        AwesomeAPIService,
        KrakenAPIService,
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        }
    ]
})
export class CustomCardModule {
}
