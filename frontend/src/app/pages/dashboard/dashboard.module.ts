import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { DashboardPageComponent } from './dashboard.component';
import { NgxLoadingModule } from 'ngx-loading';



@NgModule({
  declarations: [
    DashboardPageComponent
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
    })
  ],
  providers: []
})
export class DashboardModule {
}
