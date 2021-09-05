import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',loadChildren:()=>import('./modules/login/login.module').then(x=>x.LoginModule)},
  { path: 'create-user', loadChildren: () => import('./modules/create-user/create-user.module').then(m => m.CreateUserModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m=>m.HomeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
