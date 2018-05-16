import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageInit } from '../../../article'

@Component({
  selector: 'product-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class ProductDetailComponent {
  @Input() post: PageInit;
  @Input() isShowDetail;

  @Output() isShowList = new EventEmitter<boolean>();

  onBack() {
    this.isShowList.emit(true);
  }
}
