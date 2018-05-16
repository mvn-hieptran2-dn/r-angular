import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  title = 'Hiep';

  @Input() posts;
  @Input() isShowDetail;
  @Output() selectedPost = new EventEmitter<object>(); 
  
  constructor() {
    this.posts = [];
  }
  
  onSelect(data) {
    this.selectedPost.emit(data);
  }
}
