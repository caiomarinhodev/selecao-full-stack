import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from 'src/app/core/interface/base.component';
import { NotificationModule } from 'src/app/core/module/notification/notification.module';
import { UserService } from 'src/app/service/user/user.service';
import { CustomValidators } from 'src/app/shared/validator/custom-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent extends BaseComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute,
    vcr: ViewContainerRef,
    private translate: TranslateService) {
    super();
    this.loginForm = this.formBuilder.group(
      {
        username: new FormControl(undefined, [Validators.required,
        CustomValidators.noWhitespaceValidator]),
        password: new FormControl(undefined, [Validators.required,
        Validators.minLength(5), Validators.required, Validators.maxLength(255)]),
        rememberMe: new FormControl(undefined, [])
      }
    );
  }
  protected router: Router;
  protected notificationModule: NotificationModule;

  ngOnInit(): void {
    if (this.userService.isLogged()) {
      this.navigate(['/']);
    }
    this.loginForm.controls['rememberMe'].setValue((localStorage.getItem('rememberMe') === 'true'));

    if (localStorage.getItem('rememberedUser') !== null) {
      this.loginForm.controls['username'].setValue(localStorage.getItem('rememberedUser'));
    }
  }

  onSubmit(): void {
    this.login(this.loginForm.value['username'], this.loginForm.value['password']);
  }

  login(username, password): void {
    if (this.userService.isLogged()) {
      this.notification.error('User is logged!');
      location.reload();
      return;
    }
    this.checkRemember();

    this.userService.login(username, password).subscribe(
      result => {
        console.log('User is logged!');
        console.log(this.userService.getUser());
        this.navigate(['/']);
      },
      err => {
        this.notification.error('User or password invalid!');
      }
    );
  }


  checkRemember(): void {
    const shouldRemember: boolean = this.loginForm.value['rememberMe'];

    localStorage.setItem('rememberMe', String(shouldRemember));

    if (shouldRemember) {
      localStorage.setItem('rememberedUser', this.loginForm.value['username']);
    } else {
      localStorage.removeItem('rememberedUser');
    }
  }


  getServiceURL(): string {
    return '';
  }

  /**
   * Gets the router URL.
   *
   * @returns {string}
   */
  getRouterURL(): string {
    return '';
  }



}
