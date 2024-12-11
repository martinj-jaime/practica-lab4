import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { 
  AddProductPageComponent, 
  EditProductPageComponent, 
  ListProductsPageComponent, 
  LoginPageComponent
} from './pages';
import { authGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: ListProductsPageComponent, canActivate: [authGuard] },
  { path: 'edit/:id', component: EditProductPageComponent, canActivate: [authGuard] },
  { path: 'add', component: AddProductPageComponent, canActivate: [authGuard] },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
