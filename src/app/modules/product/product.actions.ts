import {Action} from '@ngrx/store'
import {Product} from '@app/modules/product/models/product.model';

export const FETCH_PROD = 'FETCH_PROD';
export const FETCH_PROD_COMPLETE = 'FETCH_PROD_COMPLETE';

export class FetchProdAction implements Action {
    public readonly type = FETCH_PROD;
    constructor(public payload: string) {}
}

export class FetchProdCompleteAction implements Action {
    public readonly type = FETCH_PROD_COMPLETE;
    constructor(public payload: Product) {}
}

export type Actions
    =   FetchProdAction
    |   FetchProdCompleteAction ;
