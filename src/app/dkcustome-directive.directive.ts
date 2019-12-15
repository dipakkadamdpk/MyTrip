import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDKCustomeDirective]'
})
export class DKCustomeDirectiveDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow'
    el.nativeElement.style.fontSize= '20px'
   }

}
