import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Module
import { AuthRoutingModule } from './auth/auth.routing';
import { PageRoutingModule } from './pages/pages.routing';

import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, PageRoutingModule, AuthRoutingModule]
})
export class AppRoutingModule { }
