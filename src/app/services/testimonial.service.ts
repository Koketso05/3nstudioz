import { Injectable } from '@angular/core';
import { Testimonial } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Sarah captured every precious moment of our wedding perfectly. She has an incredible eye for detail and made us feel so comfortable throughout the day.',
      service: 'Wedding Photography',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'Outstanding corporate event coverage. The photos were professional, timely, and exceeded our expectations. Highly recommended!',
      service: 'Corporate Events',
      rating: 5
    },
    {
      id: '3',
      name: 'Emma Williams',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'My family portraits turned out absolutely beautiful. The photographer made the whole experience fun and relaxing. Worth every penny!',
      service: 'Family Portraits',
      rating: 5
    },
    {
      id: '4',
      name: 'David Martinez',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      quote: 'Professional, creative, and truly passionate about their craft. My engagement photos look like they belong in a magazine!',
      service: 'Engagement Photography',
      rating: 5
    }
  ];

  getTestimonials(): Testimonial[] {
    return this.testimonials;
  }

  getFeaturedTestimonials(limit: number = 3): Testimonial[] {
    return this.testimonials.slice(0, limit);
  }

  getTestimonialById(id: string): Testimonial | undefined {
    return this.testimonials.find(t => t.id === id);
  }
}
