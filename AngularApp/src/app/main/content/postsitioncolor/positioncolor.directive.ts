import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[positionColor]'
})

export class PositionColor implements OnChanges {
  constructor(private el: ElementRef) {
  }

  @Input() positionColor: string;

  ngOnChanges() {
    switch (this.positionColor) {
      case 'SSE': 
        return this.el.nativeElement.style.color = 'purple';
      case 'SE' : 
        return this.el.nativeElement.style.color = 'blue';
      case 'Empty' : 
        return this.el.nativeElement.style.color = 'yellow';
      case 'ASE' : 
        return this.el.nativeElement.style.color = '#b4b4b4';
      default : 
        return this.el.nativeElement.style.color = 'gold';
    }
  }
}
