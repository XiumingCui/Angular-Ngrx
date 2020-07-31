import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects'
import { Action } from '@ngrx/store'
import 'rxjs/add/operator/switchMap';
import { map } from 'rxjs/operators';
import { FetchProdCompleteAction, FETCH_PROD, FetchProdAction } from './product.actions';
import { ProductService } from '@app/modules/shared/services/ProductService';

@Injectable()
class ProductEffects {
    @Effect()
    fetchProduct$: Observable<Action> = this.actions$
        .ofType<FetchProdAction>(FETCH_PROD)
        .switchMap(action => {
            //console.log('start fetch data from server', action.payload)
            //fetch data from database
            return this.productService.fetchProduct(action.payload).pipe(
                map(product => {
                    //product data fetched
                    //console.log('product fetched', product)
                    return new FetchProdCompleteAction(product)
                })
            )
        })

    constructor(
        private actions$: Actions,
        private productService: ProductService
    ) { }

}

export default ProductEffects
