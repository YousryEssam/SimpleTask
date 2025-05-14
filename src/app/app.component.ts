import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ProductFormComponent } from "./pages/product-form/product-form.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    HomeComponent, 
    ProductsComponent, 
    ProductFormComponent, 
    ProductDetailsComponent, 
    NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SimpleTask';
}
