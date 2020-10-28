import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router'
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes=[
  { path:'' , pathMatch:'full' , redirectTo:'/login'},
  {
    path: 'userlist',
    component: UserListComponent,
    //loadChildren: () => import('./components/picstagram/picstagram.module').then(m => m.PicstagramModule),
    //redirectTo:'/userlist',
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent,  canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
