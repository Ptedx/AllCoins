import { Component } from '@angular/core';
import { FadeInOutDirective } from '../../directives/fade-in-out.directive';

@Component({
  selector: 'app-call-to-action',
  standalone: true,
  imports: [FadeInOutDirective],
  templateUrl: './call-to-action.component.html',
  styleUrl: './call-to-action.component.css'
})
export class CallToActionComponent {

}
