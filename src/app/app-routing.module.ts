import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestReviewComponent } from './request/request-review/request-review.component';
import { ReviewDetailComponent } from './request/review-detail/review-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

    //{ path: '', redirectTo: "user/login", pathMatch: 'full' },  // default path once we adding login functionality
    { path: "", component: HomeComponent },
    { path: "product/create", component: ProductCreateComponent },
    { path: "product/detail/:id", component: ProductDetailComponent },
    { path: "product/edit/:id", component: ProductEditComponent },
    { path: "product/list", component: ProductListComponent },
    { path: "request/create", component: RequestCreateComponent },
    { path: "request/detail/:id", component: RequestDetailComponent },
    { path: "request/edit/:id", component: RequestEditComponent },
    { path: "request/list", component: RequestListComponent },
    { path: "request/review", component: RequestReviewComponent },
    { path: "review/detail/:id", component: ReviewDetailComponent },
    { path: "user/create", component: UserCreateComponent },
    { path: "user/detail/:id", component: UserDetailComponent },
    { path: "user/edit/:id", component: UserEditComponent },
    { path: "user/list", component: UserListComponent },
    { path: "user/login", component: UserLoginComponent },
    { path: "vendor/create", component: VendorCreateComponent },
    { path: "vendor/detail/:id", component: VendorDetailComponent },
    { path: "vendor/edit/:id", component: VendorEditComponent },
    { path: "vendor/list", component: VendorListComponent },
    { path: "**", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
