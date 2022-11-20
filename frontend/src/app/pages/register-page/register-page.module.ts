import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';


import { ReactiveFormsModule } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { ToolbarModule } from 'src/app/core/components/toolbar/toolbar.module';
import { AngularMaterialModule } from 'src/app/shared/interface/angular-material.module';
import { UserService } from '../../service/user/user.service';
import { RegisterPageComponent } from './register-page.component';



@NgModule({
    declarations: [
        RegisterPageComponent,
    ],
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        NgxLoadingModule.forRoot({
            backdropBackgroundColour: 'rgba(0,0,0,0.1)',
            backdropBorderRadius: '4px',
            primaryColour: '#0082f0',
            secondaryColour: '#0082f0',
            tertiaryColour: '#0082f0'
        }),
        AngularMaterialModule,
        ToolbarModule
    ],
    providers: [UserService]
})
export class RegisterPagenModule {
}
