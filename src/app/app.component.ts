import { Component, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent, FooterComponent } from './shared';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = '3nstudioz';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    // Update page title and meta tags on route change
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const data = this.activatedRoute.snapshot.firstChild?.data;
        if (data && data['title']) {
          this.titleService.setTitle(data['title']);
          this.metaService.updateTag({
            name: 'description',
            content: 'Professional photography and videography services in Pretoria. Weddings, events, portraits, and videography.'
          });
        }
      });

    // Set default page title and meta tags
    this.titleService.setTitle('3NStudioz - Professional Photography & Videography');
    this.metaService.updateTag({
      name: 'description',
      content: 'Professional photography and videography services in Pretoria. Capturing moments, creating stories.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'photography, videography, Pretoria, weddings, events, portraits, commercial'
    });
    this.metaService.updateTag({
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    });
  }
}
