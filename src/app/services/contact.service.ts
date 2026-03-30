import { Injectable } from '@angular/core';
import { ContactForm, ContactResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  // In a real application, this would send to a backend API
  submitContactForm(form: ContactForm): Promise<ContactResponse> {
    return new Promise((resolve) => {
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted:', form);
        resolve({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
      }, 1000);
    });
  }

  getWhatsAppLink(phoneNumber: string = '27731234567'): string {
    const message = encodeURIComponent('Hi 3NStudioz! I would like to inquire about your photography services.');
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }

  getContactInfo() {
    return {
      phone: '+27 (0) 73 123 4567',
      whatsapp: '+27 73 123 4567',
      email: 'hello@3nstudioz.com',
      location: 'Pretoria, South Africa',
      hours: {
        weekdays: '9:00 AM - 6:00 PM',
        weekends: 'By appointment'
      }
    };
  }
}
