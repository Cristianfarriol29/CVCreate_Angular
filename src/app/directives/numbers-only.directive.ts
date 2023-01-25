import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private readonly elemRef: ElementRef) { }
@HostListener('input', ['$event'])

onChangeInput(event: Event){
  const numbersOnly = /[^0-9]*/g
const initValue = this.elemRef.nativeElement.value;
this.elemRef.nativeElement.value =  initValue.replace(numbersOnly, "")
if (initValue !== this.elemRef.nativeElement.value){
event.stopPropagation();
}



}


}
