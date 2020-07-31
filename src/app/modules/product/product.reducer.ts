import { Product } from '@app/modules/product/models/product.model';
import * as prodAction from './product.actions';

export const initialState: Product = {
    id: null,
    imageUrl: null,
    brand: null,
    title: null,
    model: null,
    addToCart: null
};

export function productReducer(state = initialState, action: prodAction.Actions): Product {
    switch (action.type) {
        case prodAction.FETCH_PROD_COMPLETE: {
            return Object.assign({}, state, action.payload);//Update store data use fetched data from server
        }
        default: {
            return state;
        }
    }
}
