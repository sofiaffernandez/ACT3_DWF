import { Component } from '@angular/core';
import { CitySliderComponent } from '../../components/city-slider/city-slider.component';
import { AppFooterComponent } from '../../components/app-footer/app-footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CitySliderComponent, AppFooterComponent],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})

export class AboutComponent {
  cityImages = [
    'assets/madrid.jpg',
    'assets/barcelona.jpg',
    'assets/sevilla.jpg',
  ];
}
