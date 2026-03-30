import { Injectable } from '@angular/core';
import { Service, ServicePackage } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private services: Service[] = [
    {
      id: 'weddings',
      title: 'Wedding Photography & Videography',
      description: 'Capture your special day with stunning visual storytelling. From intimate ceremonies to grand receptions, we document every meaningful moment.',
      packages: [
        {
          id: 'wedding-bronze',
          name: 'Bronze Package',
          price: 'R 3,500',
          description: 'Perfect for smaller ceremonies',
          features: [
            '4 hours coverage',
            '400+ edited photos',
            'Digital delivery',
            'Basic album'
          ]
        },
        {
          id: 'wedding-silver',
          name: 'Silver Package',
          price: 'R 5,500',
          description: 'Full day coverage',
          features: [
            '8 hours coverage',
            '700+ edited photos',
            'Digital delivery',
            'Premium album',
            '2 photographers'
          ],
          highlight: true
        },
        {
          id: 'wedding-gold',
          name: 'Gold Package',
          price: 'R 8,000',
          description: 'Complete wedding experience',
          features: [
            '12 hours coverage',
            '1000+ edited photos',
            'Digital delivery',
            'Premium album',
            '2 photographers',
            'Videography included',
            'Same-day highlights video'
          ]
        }
      ]
    },
    {
      id: 'events',
      title: 'Event Coverage',
      description: 'Professional documentation of corporate events, conferences, festivals, and celebrations. We capture the energy and emotion of every gathering.',
      packages: [
        {
          id: 'event-basic',
          name: 'Basic Coverage',
          price: 'R 1,500',
          description: '2-3 hour event',
          features: [
            '2-3 hours coverage',
            '200+ photos',
            'Digital delivery',
            '1 photographer'
          ]
        },
        {
          id: 'event-premium',
          name: 'Premium Coverage',
          price: 'R 2,500',
          description: 'Full event day',
          features: [
            '6-8 hours coverage',
            '500+ photos',
            'Digital delivery',
            '2 photographers',
            'Printed album'
          ],
          highlight: true
        }
      ]
    },
    {
      id: 'portraits',
      title: 'Portrait Sessions',
      description: 'Timeless portraits for every occasion - headshots, family portraits, engagement sessions, or artistic photography. We create images that tell your story.',
      packages: [
        {
          id: 'portrait-session',
          name: 'Studio Session',
          price: 'R 800',
          description: '1-hour session',
          features: [
            '1 hour session',
            '50+ photos',
            '5 final images',
            'Basic retouching'
          ]
        },
        {
          id: 'portrait-location',
          name: 'Location Session',
          price: 'R 1,200',
          description: 'Outdoor session',
          features: [
            '1.5 hour session',
            'Location scouting',
            '80+ photos',
            '10 final images',
            'Professional retouching'
          ],
          highlight: true
        }
      ]
    },
    {
      id: 'tribal',
      title: 'Funeral & Tombstone Unveiling',
      description: 'Respectful and dignified coverage of memorial services and tombstone unveilings. We preserve precious moments during times of remembrance.',
      packages: [
        {
          id: 'funeral-basic',
          name: 'Service Coverage',
          price: 'R 2,000',
          description: 'Ceremony documentation',
          features: [
            '3-4 hours coverage',
            '300+ photos',
            'Digital delivery',
            '1 photographer'
          ]
        },
        {
          id: 'funeral-premium',
          name: 'Full Day Coverage',
          price: 'R 3,500',
          description: 'Complete event',
          features: [
            '6-8 hours coverage',
            '600+ photos',
            'Digital delivery & album',
            '2 photographers',
            'Videography included'
          ],
          highlight: true
        }
      ]
    },
    {
      id: 'videography',
      title: 'Video Production',
      description: 'Professional videography and video editing for all occasions. From cinematic wedding films to event highlights, we bring your story to life.',
      packages: [
        {
          id: 'video-highlights',
          name: 'Highlights Reel',
          price: 'R 2,000',
          description: '3-5 minute video',
          features: [
            '4-6 hours coverage',
            '3-5 minute highlights video',
            'Professional editing',
            'Digital delivery'
          ]
        },
        {
          id: 'video-full',
          name: 'Full Production',
          price: 'R 5,000',
          description: 'Complete project',
          features: [
            'Full day coverage',
            '15-20 minute film',
            'Professional editing',
            '2 videographers',
            'Digital delivery & backup'
          ],
          highlight: true
        }
      ]
    }
  ];

  getServices(): Service[] {
    return this.services;
  }

  getServiceById(id: string): Service | undefined {
    return this.services.find(s => s.id === id);
  }

  getServicePackage(serviceId: string, packageId: string): ServicePackage | undefined {
    const service = this.getServiceById(serviceId);
    return service?.packages?.find(p => p.id === packageId);
  }
}
