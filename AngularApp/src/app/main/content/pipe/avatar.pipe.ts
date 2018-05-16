import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe ({
  name: 'pipe',
})

export class AvatarPipe implements PipeTransform {
  transform(value: any): any {
    if(!value) {
      return 'https://www.bin.vn/upload/article/noavatar_1418273249.jpg'
    } else {
      return value;
    }
  }
}
