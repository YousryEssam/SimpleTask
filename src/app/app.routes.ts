import { ProductsComponent } from './pages/products/products.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
    },
    {
        path: 'Home',
        component: HomeComponent,
    },
    {
        path: 'Products',
        component: ProductsComponent,
    },
    {
        path: 'Products/:id',
        component: ProductDetailsComponent,
    },
    {
        path: 'Products/:id/Edit',
        component: ProductFormComponent,
    },
        {
        path: '**',
        component: NotFoundComponent,
    },
];
