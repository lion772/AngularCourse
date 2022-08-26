import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'blue'
    );
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'transparent'
    );
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    /*this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      'blue'
    );*/
  }
}
