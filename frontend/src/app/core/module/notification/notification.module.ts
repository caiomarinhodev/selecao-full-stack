import { Injectable, ViewContainerRef } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';


/**
 * Module for user notification by 'toast' style.
 */
@Injectable()
export class NotificationModule {

  /**
   * Constructor.
   *
   * @param {ToastsManager} toastr
   * @param {ToastOptions} toastOptions
   */
  constructor(private toastr: ToastrService,
    public translateService: TranslateService) {
  }

  /**
   * Sets the 'View Container' for the Toast.
   *
   * @param {ViewContainerRef} vcr
   */
  setView(vcr: ViewContainerRef) {
  }

  /* Defaults */
  success() {
    this.successText('Operation performed successfully.');
  }

  successText(text: string) {
    this.translateService.get('SUCCESS').subscribe((message: string) => {
      this.toastr.success(text, message, {
        timeOut: 5000
      });
    });
  }

  error(text: string) {
    this.translateService.get('ERROR').subscribe((message: string) => {
      this.toastr.error(text, message);
    });
  }

  warning(text: string) {
    this.translateService.get('WARNING').subscribe((message: string) => {
      this.toastr.warning(text, message);
    });
  }

  info(text: string) {
    this.translateService.get('INFO').subscribe((message: string) => {
      this.toastr.info(text, message);
    });
  }

}
