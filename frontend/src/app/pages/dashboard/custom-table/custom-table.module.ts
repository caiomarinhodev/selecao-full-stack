import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { LOCALE_ID } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/shared/interface/angular-material.module';
import { CustomTableComponent } from './custom-table.component';

registerLocaleData(localePt, 'pt');

@NgModule({
    declarations: [
        CustomTableComponent,
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
        CustomTableComponent
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        }
    ]
})
export class CustomTableModule {
}
