import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TabViewModule } from 'primeng/tabview';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';

import {CheckboxModule} from 'primeng/checkbox';
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    CheckboxModule,
    DropdownModule,
    RadioButtonModule,
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
