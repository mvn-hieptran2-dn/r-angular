import { Directive, DoCheck, ElementRef, Input } from '@angular/core';

@Directive ({
  selector: '[phone-directive]',
})

export class PhoneDirective implements DoCheck {

  constructor(private el: ElementRef) {
  }

  @Input('phone-directive') phoneNum: string;
  
  ngDoCheck() {
    if(!this.phoneNum) {
      this.el.nativeElement.innerHTML = "Empty";
      this.el.nativeElement.style.color = "#676a6c";
      this.el.nativeElement.style.fontStyle = "italic";
    } else {
      this.el.nativeElement.innerHTML = this.phoneNum;
      this.el.nativeElement.style.color = "#000";
      this.el.nativeElement.style.fontStyle = "normal";
    }
  }
}