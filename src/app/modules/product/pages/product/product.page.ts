import {Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchProdAction } from '../../product.actions';


@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {

    /**
        If you haven't already, I highly suggest reading the README.md
    */
    
    product$: Observable<Product>;
    constructor(        
        private route: ActivatedRoute,
        private store: Store<Product>
    ) {}

    ngOnInit() {
        //get product ID from url
        this.route.paramMap.subscribe(params => {
            const productId = params.get('productId');
            //console.log('productId', productId)
            this.store.dispatch(new FetchProdAction(productId));
        });
        //selector: selector data from store
        this.product$ = this.store.select(product => {
            //console.log('select from store', product)
            return product
        });
    }

}

