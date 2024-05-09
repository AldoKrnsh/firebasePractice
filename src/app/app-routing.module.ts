import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonasListaComponent } from './personas-lista/personas-lista.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'personas', component: PersonasListaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
