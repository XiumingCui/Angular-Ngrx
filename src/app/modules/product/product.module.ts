import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPage } from '@product/pages/product/product.page';
import { SharedModule } from '@shared/shared.module';
import ProductEffects from '@app/modules/product/product.effect'
import { StoreModule } from '@ngrx/store';
import { productReducer } from './product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductService } from '@app/modules/shared/services/ProductService';
import { ProdHeader } from './components/product.component-header'
import { ProdDesc } from './components/product.component-desc'
import { ProdPp } from './components/product.component-pp'

export const productRoutes: Routes = [
    {
        path: ':productId',
        component: ProductPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes),
        StoreModule.forFeature('product', productReducer),
        EffectsModule.forFeature([ProductEffects])
    ],
    declarations: [
        ProductPage,
        ProdHeader,
        ProdDesc,
        ProdPp
    ],
    providers: [
        ProductService
    ]
})
export class ProductModule {
}
