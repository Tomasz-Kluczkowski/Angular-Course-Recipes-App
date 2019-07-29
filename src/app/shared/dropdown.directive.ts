import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  // dropdownOpened = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') onDropDownClicked(eventData: Event) {
    // const parentNode = this.elementRef.nativeElement.parentNode;
    // this.renderer[this.dropdownOpened ? 'removeClass' : 'addClass'](parentNode, 'open');
    // this.dropdownOpened = !this.dropdownOpened;
    // this.elementRef.nativeElement.parentNode.classList.toggle('open');
    this.isOpen = !this.isOpen;
  }
}
