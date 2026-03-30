import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactForm } from '../../models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  contactInfo = this.contactService.getContactInfo();

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  submitting = false;
  submitSuccess = false;
  submitError = false;
  errorMessage = '';

  services = [
    'Wedding Photography',
    'Event Coverage',
    'Portraits',
    'Videography',
    'Other'
  ];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {}

  async submitForm(): Promise<void> {
    if (!this.isFormValid()) {
      this.submitError = true;
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.submitting = true;
    this.submitError = false;

    try {
      const response = await this.contactService.submitContactForm(this.form);
      this.submitSuccess = response.success;
      if (response.success) {
        this.resetForm();
      }
    } catch (error) {
      this.submitError = true;
      this.errorMessage = 'Failed to submit form. Please try again.';
    } finally {
      this.submitting = false;
    }

    // Clear success message after 5 seconds
    if (this.submitSuccess) {
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }
  }

  private isFormValid(): boolean {
    return !!(this.form.name && this.form.email && this.form.phone && this.form.service && this.form.message);
  }

  private resetForm(): void {
    this.form = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }

  getWhatsAppLink(): string {
    const message = encodeURIComponent(`Hi 3NStudioz! I'm interested in ${this.form.service || 'your services'}.`);
    return this.contactService.getWhatsAppLink().split('?')[0] + `?text=${message}`;
  }
}
