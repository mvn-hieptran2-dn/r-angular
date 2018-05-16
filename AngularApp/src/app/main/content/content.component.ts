import { Component, Output, Input } from '@angular/core';
import { PageInit } from '../../article';
import { posts } from '../../mock-article'

@Component ({
  selector: 'page-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class PageContentComponent {
  selectedPost = {};
  articles = posts;
  isShowDetail = false;
  
  onSelect(post : PageInit): void {
    this.selectedPost = post;
    this.isShowDetail = true;
  }

  onBack() {
    this.isShowDetail = false;
  }
}
