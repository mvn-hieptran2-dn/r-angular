import { Injectable } from '@angular/core';
import { InfoMember } from '../../app/listinfo';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  public listEmployee: Observable<InfoMember[]>;
  constructor(public http: HttpClient) {
    this.getList().subscribe(data => {
      // console.log('service', data);
    });
  }
  public getList(): Observable<any> {
    return(this.http.get('assets/data/member.json'));
  }
  public getEmployeesSamePosition(lst, employee): InfoMember[] {
    return lst.filter(item => item.Position === lst.Position && lst !== item);
  }
}