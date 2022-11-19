import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrOrderingDirective } from './tr-ordering.directive';

@NgModule({
  imports: [CommonModule],
  exports: [TrOrderingDirective],
  declarations: [TrOrderingDirective],
  providers: [],
})
export class TrOrderingModule {
}
