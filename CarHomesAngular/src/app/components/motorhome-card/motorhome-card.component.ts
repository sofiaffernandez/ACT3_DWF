import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-motorhome-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motorhome-card.component.html',
  styleUrls: ['./motorhome-card.component.css']
})

export class MotorhomeCardComponent {
  @Input() nombre: string = '';
  @Input() descripcion: string | null = '';
  @Input() imagen: string = '';
}
