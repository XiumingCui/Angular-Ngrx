import { Component, Input } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';
@Component({
    selector: 'product-pp',
    templateUrl: './product.component-pp.html'
})

export class ProdPp {
    @Input() product: Product
    constructor() {}
}
