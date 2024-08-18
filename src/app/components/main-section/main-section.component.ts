import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent implements AfterViewInit{


  ngAfterViewInit(): void {

    const elements = document.querySelectorAll('h1, p, button')

    gsap.from(elements,{
        opacity: 0,
        y: 100,
        duration: 0.5,
        stagger: 0.3
      })
  }
}
