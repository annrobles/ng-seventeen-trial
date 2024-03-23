import { Directive, HostListener, ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appMaskPostcode]',
  standalone: true
})
export class AppMaskPostcodeDirective {
  constructor(public ngControl: NgControl, private el: ElementRef<HTMLInputElement>) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    let value = this.el.nativeElement.value.replace(/\s+/g, '').toUpperCase();

    const pattern = /([A-Z])?(\d)?([A-Z])?\s*(\d)?([A-Z])?(\d)?/;
    const match = value.match(pattern);

    if (match) {
      let formattedValue = '';
      
      if (match[1]) formattedValue += match[1];
      if (match[2]) formattedValue += match[2];
      if (match[3]) formattedValue += match[3];

      if (match[4] || match[5] || match[6]) formattedValue += ' ';
      if (match[4]) formattedValue += match[4];
      if (match[5]) formattedValue += match[5];
      if (match[6]) formattedValue += match[6];

      this.el.nativeElement.value = formattedValue;
    }
  }
}
