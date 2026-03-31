import { Injectable } from '@angular/core';
import { ContactForm, ContactResponse } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  submitContactForm(form: ContactForm): Promise<ContactResponse> {
    return fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then(async (response) => {
      if (!response.ok) {
        const errorBody = await response.text();
        console.error('Contact API error', response.status, errorBody);
        return {
          success: false,
          message: 'Failed to send message. Please try again later.'
        };
      }

      const result = await response.json();
      return {
        success: result.success,
        message: result.message || 'Thank you for your message! We will get back to you soon.'
      };
    }).catch((error) => {
      console.error('Contact API request failed:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again or contact us via WhatsApp.'
      };
    });
  }

  getWhatsAppLink(phoneNumber: string = '27761232491'): string {
    const message = encodeURIComponent('Hi 3NStudioz! I would like to inquire about your photography services.');
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }

  getContactInfo() {
    return {
      phone: '+27 (0) 76 123 2491',
      whatsapp: '+27 (0) 76 123 2491',
      email: '3nstudioz@gmail.com',
      location: 'Pretoria, South Africa',
      hours: {
        weekdays: '4:30 AM - 8:00 PM',
        weekends: 'By appointment'
      }
    };
  }
}
