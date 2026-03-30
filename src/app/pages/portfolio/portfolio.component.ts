import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio, PortfolioCategory } from '../../models';
import { LightboxComponent } from '../../shared/lightbox/lightbox.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, LightboxComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements OnInit {
  categories: PortfolioCategory[] = [];
  portfolios: Portfolio[] = [];
  filteredPortfolios: Portfolio[] = [];
  selectedCategory = signal('all');

  // Lightbox
  lightboxOpen = signal(false);
  currentImageIndex = signal(0);

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.categories = this.portfolioService.getCategories();
    this.portfolios = this.portfolioService.getPortfolios();
    this.filterPortfolios('all');
  }

  filterPortfolios(category: string): void {
    this.selectedCategory.set(category);
    this.filteredPortfolios = this.portfolioService.getPortfoliosByCategory(category);
  }

  openLightbox(index: number): void {
    this.currentImageIndex.set(index);
    this.lightboxOpen.set(true);
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
  }

  nextImage(): void {
    this.currentImageIndex.update(i => (i + 1) % this.filteredPortfolios.length);
  }

  previousImage(): void {
    this.currentImageIndex.update(i => (i - 1 + this.filteredPortfolios.length) % this.filteredPortfolios.length);
  }
}
