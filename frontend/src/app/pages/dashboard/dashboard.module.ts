import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { NgxLoadingModule } from 'ngx-loading';
import { AwesomeAPIService } from 'src/app/service/api/awesomeapi.service';
import { AngularMaterialModule } from 'src/app/shared/interface/angular-material.module';
import { CustomCardModule } from './custom-card/custom-card.module';
import { CustomTableModule } from './custom-table/custom-table.module';
import { DashboardPageComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgxLoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#0082f0',
      secondaryColour: '#0082f0',
      tertiaryColour: '#0082f0'
    }),
    AngularMaterialModule,
    CustomCardModule,
    CustomTableModule
  ],
  providers: [
    AwesomeAPIService
  ]
})
export class DashboardModule {
}
