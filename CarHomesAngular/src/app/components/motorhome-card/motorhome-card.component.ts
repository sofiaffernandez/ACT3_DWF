import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-motorhome-card',
  templateUrl: './motorhome-card.component.html',
  styleUrls: ['./motorhome-card.component.css']
})

export class MotorhomeCardComponent {
  @Input() nombre: string = '';
  @Input() descripcion: string | null = '';
  @Input() imagen: string = '';
}
