import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu.component";
import { MainSectionComponent } from "./components/main-section/main-section.component";
import { FeaturesComponent } from "./components/features/features.component";
import { DepoimentsComponent } from "./components/depoiments/depoiments.component";
import { CallToActionComponent } from "./components/call-to-action/call-to-action.component";
import { FooterComponent } from "./components/footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, MainSectionComponent, FeaturesComponent, DepoimentsComponent, CallToActionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AllCoins';
}
