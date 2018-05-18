import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InfoMember } from '../../../listinfo'

@Component({
  selector: 'product-detail',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class ProductDetailComponent {
  @Input() post: InfoMember;
  @Input() isShowDetail;
  @Input() PostList: InfoMember[];
  
  @Output() isShowList = new EventEmitter<boolean>();

  onBack() {
    this.isShowList.emit(true);
  }
}
