import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PortfolioService, TestimonialService } from '../../services';
import { Portfolio, Testimonial } from '../../models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  featured: Portfolio[] = [];
  testimonials: Testimonial[] = [];
  currentSlideIndex = 0;

  services = [
    {
      title: 'Weddings',
      description: 'Celebrate your special day with stunning photography',
      icon: '💒'
    },
    {
      title: 'Events',
      description: 'Professional coverage of any occasion',
      icon: '🎉'
    },
    {
      title: 'Portraits',
      description: 'Timeless portraits that capture your essence',
      icon: '👤'
    },
    {
      title: 'Commercial',
      description: 'Professional imagery for your business',
      icon: '🏢'
    }
  ];

  constructor(
    private portfolioService: PortfolioService,
    private testimonialService: TestimonialService
  ) {}

  ngOnInit(): void {
    this.featured = this.portfolioService.getFeaturedPortfolios(8);
    this.testimonials = this.testimonialService.getFeaturedTestimonials(3);
    this.startSlideshow();
  }

  private startSlideshow(): void {
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.featured.length;
    }, 5000);
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.featured.length;
  }

  previousSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.featured.length) % this.featured.length;
  }

  goToSlide(index: number): void {
    this.currentSlideIndex = index;
  }
}
