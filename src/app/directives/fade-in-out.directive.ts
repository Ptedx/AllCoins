import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { ScrollTrigger } from 'gsap/all';

import { gsap } from 'gsap/gsap-core';

@Directive({
  selector: '[appFadeInOut]',
  standalone: true
})
export class FadeInOutDirective implements AfterViewInit{

  constructor(private el: ElementRef) {
    gsap.registerPlugin(ScrollTrigger)
   }

  ngAfterViewInit(): void {
    gsap.from(this.el.nativeElement, {
      y: 100,
      opacity: 0,
      stagger: 0.25,
      scrollTrigger: {
        trigger: this.el.nativeElement,
        scrub: 1
      }
    })
  }
}
