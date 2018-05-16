import { Component, Output, Input } from '@angular/core';
import { InfoMember } from '../../listinfo';
import { posts } from '../../mock-listinfo';

@Component ({
  selector: 'page-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class PageContentComponent {
  selectedPost = {};
  articles = posts;
  isShowDetail = false;
  listpost : InfoMember[];


  onSelect(lst : InfoMember): void {
    this.selectedPost = lst;
    this.isShowDetail = true;
    this.listpost = this.articles.filter(item => item.Position === lst.Position && lst !== item);
  }

  onBack() {
    this.isShowDetail = false;
  }
}
