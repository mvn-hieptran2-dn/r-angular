import { Component, Output, Input, OnInit } from '@angular/core';
import { InfoMember } from '../../listinfo';
import { DemoService } from '../../../assets/getservice/getmember.service';

@Component ({
  selector: 'page-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})

export class PageContentComponent implements OnInit {
  selectedPost = {};
  articles : InfoMember[];
  isShowDetail = false;
  listpost : InfoMember[];
  member_list: InfoMember[];
  relatedEmployee: InfoMember[];

  constructor(private memService: DemoService) {}

  ngOnInit() {
    this.memService.getList().subscribe(data => {
      this.articles = data;
    });
  }

  detailOfEmployee(employee: InfoMember): void {
    this.selectedPost = employee;
    this.isShowDetail = true;
    this.relatedEmployee = this.memService.getEmployeesSamePosition(this.articles, employee);
  }

  onSelect(lst : InfoMember): void {
    this.selectedPost = lst;
    this.isShowDetail = true;
    this.listpost = this.articles.filter(item => item.Position === lst.Position && lst !== item);
  }

  onBack() {
    this.isShowDetail = false;
  }
}
