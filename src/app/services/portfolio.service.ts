import { Injectable } from '@angular/core';
import { Portfolio, PortfolioCategory } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private portfolioData: Portfolio[] = [
    // Weddings
    {
      id: '1',
      title: 'Sarah & John Wedding',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop',
      description: 'Beautiful garden wedding ceremony and reception'
    },
    {
      id: '2',
      title: 'Emma & David Wedding',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1465146072230-91cabc968266?w=800&h=600&fit=crop',
      description: 'Elegant church wedding with heartfelt moments'
    },
    {
      id: '3',
      title: 'Lisa & Michael Wedding',
      category: 'weddings',
      image: 'https://images.unsplash.com/photo-1581886820328-e91b20667878?w=800&h=600&fit=crop',
      description: 'Sunset beach wedding with modern elegance'
    },
    // Events
    {
      id: '4',
      title: 'Corporate Gala 2024',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=600&fit=crop',
      description: 'Professional corporate event photography'
    },
    {
      id: '5',
      title: 'Birthday Celebration',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1502844990353-145cd4ae2f41?w=800&h=600&fit=crop',
      description: 'Joyful birthday party moments captured'
    },
    {
      id: '6',
      title: 'Festival Coverage',
      category: 'events',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
      description: 'Dynamic festival and event documentation'
    },
    // Portraits
    {
      id: '7',
      title: 'Professional Headshots',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      description: 'Corporate and professional portraits'
    },
    {
      id: '8',
      title: 'Family Portrait Session',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop',
      description: 'Warm family portrait session'
    },
    {
      id: '9',
      title: 'Engagement Photoshoot',
      category: 'portraits',
      image: 'https://images.unsplash.com/photo-1516789592301-f51383f0f566?w=800&h=600&fit=crop',
      description: 'Romantic engagement photography'
    }
  ];

  private categories: PortfolioCategory[] = [
    { id: 'weddings', name: 'Weddings' },
    { id: 'events', name: 'Events' },
    { id: 'portraits', name: 'Portraits' },
    { id: 'videography', name: 'Videography' }
  ];

  getPortfolios(): Portfolio[] {
    return this.portfolioData;
  }

  getPortfoliosByCategory(category: string): Portfolio[] {
    if (category === 'all') {
      return this.portfolioData;
    }
    return this.portfolioData.filter(p => p.category === category);
  }

  getPortfolioById(id: string): Portfolio | undefined {
    return this.portfolioData.find(p => p.id === id);
  }

  getCategories(): PortfolioCategory[] {
    return this.categories;
  }

  // Featured portfolios (for home page)
  getFeaturedPortfolios(limit: number = 8): Portfolio[] {
    return this.portfolioData.slice(0, limit);
  }
}
