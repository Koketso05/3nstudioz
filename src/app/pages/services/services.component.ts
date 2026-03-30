import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { Service } from '../../models';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  services: Service[] = [];
  selectedService: Service | null = null;

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.services = this.serviceService.getServices();
    if (this.services.length > 0) {
      this.selectedService = this.services[0];
    }
  }

  selectService(service: Service): void {
    this.selectedService = service;
  }
}
