import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  contactInfo = this.contactService.getContactInfo();
  currentYear = new Date().getFullYear();

  constructor(private contactService: ContactService) {}

  getWhatsAppLink(): string {
    return this.contactService.getWhatsAppLink();
  }
}
