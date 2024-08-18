import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import { depoimentsProps } from '../../models/depoiments.model';
import { FadeInOutDirective } from '../../directives/fade-in-out.directive';

gsap.registerPlugin(ScrollTrigger)

@Component({
  selector: 'app-depoiments',
  standalone: true,
  imports: [CommonModule, FadeInOutDirective],
  templateUrl: './depoiments.component.html',
  styleUrl: './depoiments.component.css'
})
export class DepoimentsComponent implements AfterViewInit, OnDestroy{
    scrollTrigger: ScrollTrigger[] = []
    depoiments:depoimentsProps[] =[
      {img:'/profile-1.png', name:'Daniela Costa' ,text:"Finalmente encontrei uma plataforma que me deixa tranquila para investir. Agora, acompanho as cotações com segurança e faço escolhas com muito mais confiança."},
      {img:'/profile-2.png', name: 'Augusto César', text:"Gerenciar meu portfólio de criptomoedas sempre foi complicado, mas aqui tudo ficou mais fácil. É bom sentir que estou no controle dos meus investimentos."},
      {img:'/profile-3.png', name: 'Nicole Barreto' ,text:"Para quem está começando, essa plataforma foi como um guia no mundo das criptos. Hoje, me sinto muito mais segura e informada antes de tomar qualquer decisão."}
    ]

    ngAfterViewInit(){
      const boxes = gsap.utils.toArray<HTMLElement>('.box');

      boxes.forEach((box, index) => {
        gsap.matchMedia().add('(min-width: 769px)',()=>{
          const direction = index % 2===0? 200: -200
          const trigger = gsap.to(box, {
            x: direction,
            y: -100,
            opacity: 1,
            scrollTrigger: {
              trigger: box,
              scrub: 1
            }
          })
          this.scrollTrigger.push(trigger.scrollTrigger!)
        })
        gsap.matchMedia().add('(max-width: 768px)',()=>{
          const direction = index % 2===0? 100: -100
          const trigger = gsap.from(box, {
            y: 100,
            x: direction,
            opacity: 0,
            scrollTrigger: {
              trigger: box,
              scrub: 1
            }
          })
          this.scrollTrigger.push(trigger.scrollTrigger!)
        })
      })
    }
    ngOnDestroy(): void {
        this.scrollTrigger.forEach(trigger => trigger.kill())
    }
}
