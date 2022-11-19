import { OnInit } from '@angular/core';
import { BaseComponent } from '../../core/interface/base.component';
import { NavigationExtras } from '@angular/router';

/**
 * The 'BaseComponent' class provides the common API for all the components
 * in the system.
 *
 * Operations like notification, navigation and other are already implemented.
 *
 * All components MUST extend this class.
 */
export abstract class BaseCustomComponent extends BaseComponent implements OnInit {

  navigationExtras: NavigationExtras;

  constructor() {
    super();
  }

  getNavigationExtras(): NavigationExtras {
    return this.navigationExtras;
  }


}
