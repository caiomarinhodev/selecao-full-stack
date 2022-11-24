import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { BaseComponent } from 'src/app/core/interface/base.component';
import { NotificationModule } from 'src/app/core/module/notification/notification.module';
import { UserService } from 'src/app/service/user/user.service';
import { CustomValidators } from 'src/app/shared/validator/custom-validators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.less']
})
export class RegisterPageComponent extends BaseComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute,
    vcr: ViewContainerRef,
    private translate: TranslateService) {
    super();
    this.registerForm = this.formBuilder.group(
      {
        username: new FormControl(undefined, [Validators.required,
        CustomValidators.noWhitespaceValidator]),
        email: new FormControl(undefined, [Validators.required,
        CustomValidators.noWhitespaceValidator]),
        password: new FormControl(undefined, [Validators.required,
        Validators.minLength(5), Validators.required, Validators.maxLength(255)]),
        retype_password: new FormControl(undefined, [Validators.required,
        Validators.minLength(5), Validators.required, Validators.maxLength(255)])
      }
    );
  }
  protected router: Router;
  protected notificationModule: NotificationModule;

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.registerForm.value['password'] !== this.registerForm.value['retype_password']) {
      this.notification.error('Senhas não conferem!');
      return;
    }
    this.register(this.registerForm.value['username'], this.registerForm.value['email'], this.registerForm.value['password']);
  }

  register(username, email, password): void {
    this.userService.register(username, email, password).subscribe(
      result => {
        this.notification.successText('Usuário criado com sucesso!');
        this.navigate(['/login']);
      },
      err => {
        this.notification.error('Usuário ou senha inválida!');
      }
    );
  }

  back() {
    this.navigate(['/login']);
  }

  getServiceURL(): string {
    return '';
  }

  getRouterURL(): string {
    return '';
  }


}
