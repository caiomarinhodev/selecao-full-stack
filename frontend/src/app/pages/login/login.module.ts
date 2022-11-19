import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';


import { UserService } from '../../service/user/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared/interface/angular-material.module';
import { LoginComponent } from './login.component';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        AngularMaterialModule
    ],
    providers: [UserService]
})
export class LoginModule {
}
