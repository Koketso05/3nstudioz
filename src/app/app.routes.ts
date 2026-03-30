import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home - 3NStudioz | Professional Photography & Videography' }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { title: 'Portfolio - 3NStudioz | View Our Work' }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: { title: 'Services - 3NStudioz | Photography & Videography Packages' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About Us - 3NStudioz | Our Story' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact Us - 3NStudioz | Get in Touch' }
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
    data: { title: 'Testimonials - 3NStudioz | Client Reviews' }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
