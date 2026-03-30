import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { label: '500+', description: 'Events Covered' },
    { label: '50+', description: 'Happy Clients' },
    { label: '10+', description: 'Years Experience' },
    { label: '4', description: 'Service Categories' }
  ];
}
