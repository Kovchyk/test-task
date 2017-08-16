import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule }   from "@angular/forms";

import {Routes, RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetaisComponent } from "./product-detais/product-detais.component";
import { CartComponent } from "./cart/cart.component";
import { AuthGuard } from "./guards/auth.guard";
import { AuthService } from "./services/auth.service";
import { ProductService } from "./services/product.service";
import { NavigateService } from "./services/navigate.service";
import { CartService } from "./services/cart.service";
import { PurchaseComponent } from "./purchase/purchase.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { FilterPipe } from "./pipes/filter.pipe";
import { PageNotFoundComponent } from "./page-not-found.component";

const appRoutes: Routes =[
    { path: "", component: WelcomeComponent },
    { path: "product", component: ProductListComponent, canActivate: [AuthGuard] },
    { path: "product/:id", component: ProductDetaisComponent, canActivate: [AuthGuard] },
    { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
    { path: "purchase/:id", component: PurchaseComponent, canActivate: [AuthGuard] },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetaisComponent,
    CartComponent,
    PurchaseComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, ProductService, NavigateService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }