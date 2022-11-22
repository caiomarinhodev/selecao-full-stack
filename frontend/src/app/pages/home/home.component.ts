import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationModule } from '../../core/module/notification/notification.module';
import { Router } from '@angular/router';
import { AppInjector } from '../../app.injector';
import { UserService } from '../../service/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {

  /**
   * Flags if the user is logged.
   *
   * @type {boolean}
   */
  logged = false;

  user = {};

  constructor(
    vcr: ViewContainerRef,
    public notification: NotificationModule,
    private translate: TranslateService,
    private userService: UserService) {
    this.notification.setView(vcr);
    this.configTranslate();
    if (this.userService.isLogged()) {
      console.log('User is logged!');
      this.user = this.userService.getUser();
    } else {
      this.router.navigate(['/login']);
    }

  }

  protected router: Router = AppInjector.get(Router);

  private configTranslate() {
    let browserLang = localStorage.getItem('lang');
    if (!browserLang) {
      browserLang = this.translate.getBrowserLang();
    }

    this.translate.addLangs(['en', 'es', 'pt']);
    this.translate.setDefaultLang('en');
    this.translate.use(browserLang.match(/en|es|pt/) ? browserLang : 'en');
  }

  back() {
    this.router.navigate(['/']);
  }

  logout() {
    this.userService.logout();
  }

}
