import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './service/data.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { LoginService } from './service/login.service';
import { PersonasListaComponent } from './personas-lista/personas-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonasListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule, RouterModule
  ],
  providers: [
    provideClientHydration(), DataService, LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
