import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { NgxLoadingModule } from 'ngx-loading';
import { AngularMaterialModule } from 'src/app/shared/interface/angular-material.module';
import { CustomCardComponent } from './custom-card.component';



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
    providers: []
})
export class CustomCardModule {
}
