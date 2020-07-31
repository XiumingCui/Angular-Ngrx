import { Component, Input } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';
@Component({
    selector: 'product-header',
    templateUrl: './product.component-header.html'
})

export class ProdHeader {
    @Input() product: Product
    constructor() {}
}
