import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMaskPhone]',
  standalone: true
})
export class AppMaskPhoneDirective {

  constructor(public ngControl: NgControl, private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    let formattedValue = '';
    let value = this.el.nativeElement.value;
    value = value.replace(/\D/g, '');
    
    if (value.length > 0) {
      formattedValue += `(${value.substring(0, 3)}`;
    }
    if (value.length >= 4) {
      formattedValue += `) ${value.substring(3, 6)}`;
    }
    if (value.length > 6) {
      formattedValue += `-${value.substring(6, 10)}`;
    }

    this.el.nativeElement.value = formattedValue;
  }
}
