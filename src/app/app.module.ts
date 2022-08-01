import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProListComponent } from './components/pro-list/pro-list.component';
import { CatListComponent } from './components/cat-list/cat-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { Routes,RouterModule } from '@angular/router';
import { ProductformComponent } from './components/productform/productform.component';
import { CategoryformComponent } from './components/categoryform/categoryform.component';
import { FormsModule } from '@angular/forms';
import { MerchantComponent } from './components/merchant/merchant.component';
import { BuyerComponent } from './components/buyer/buyer.component';
const route : Routes = [
  {path: '',component:WelcomeComponent},
  {path: 'products',component:ProListComponent},
  {path: 'categories',component:CatListComponent},
  {path: 'productform',component:ProductformComponent},
  {path: 'categoryform',component:CategoryformComponent},
  {path: 'shop',component:BuyerComponent},
  {path: 'merchant',component:MerchantComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    ProListComponent,
    CatListComponent,
    ProListComponent,
    CatListComponent,
    WelcomeComponent,
    ProductformComponent,
    CategoryformComponent,
    ProductformComponent,
    CategoryformComponent,
    MerchantComponent,
    BuyerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
