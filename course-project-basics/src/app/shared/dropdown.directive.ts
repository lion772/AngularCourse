import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  isOpen = false;
  @HostBinding('class.open') addClass;

  @HostListener('click') toggleOpen(event: Event) {
    this.isOpen = !this.isOpen;
  }
}
