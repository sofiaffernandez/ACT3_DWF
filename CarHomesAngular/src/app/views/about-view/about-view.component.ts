import { Component } from '@angular/core';
import { CitySliderComponent } from '../../components/city-slider/city-slider.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CitySliderComponent],
  templateUrl: './about-view.component.html',
  styleUrl: './about-view.component.css'
})
export class AboutComponent {

}
