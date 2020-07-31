import { Component, Input } from '@angular/core';
import { Product } from '@app/modules/product/models/product.model';

@Component({
    selector: 'product-desc',
    templateUrl: './product.component-desc.html'
})

export class ProdDesc {
    @Input() product: Product
    constructor() {}
}
