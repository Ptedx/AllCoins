import { AfterViewInit, Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { divsProps } from '../../models/features.model';
import { FadeInOutDirective } from '../../directives/fade-in-out.directive';
import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FadeInOutDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})

export class FeaturesComponent implements AfterViewInit{
  items:divsProps[] = [
    {img: '/timer.png', text: 'Cotações em Tempo Real'},
    {img: '/chart.png', text: 'Análises e Gráficos Avançados'},
    {img: '/news.png', text: 'Notícias do Mercado'},
    {img: '/alert.png', text: 'Alertas Personalizados'}
  ]

  ngAfterViewInit(): void {

    gsap.from('.item',{
      y:100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger:{
        trigger: '.item',
        scrub: 1
      }
    })
  }
}
