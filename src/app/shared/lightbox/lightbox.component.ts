import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ opacity: 0 }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'scale(0.9)', opacity: 0 }),
        animate('300ms ease-in-out', style({ transform: 'scale(1)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in-out', style({ transform: 'scale(0.9)', opacity: 0 }))
      ])
    ])
  ]
})
export class LightboxComponent {
  @Input() isOpen = false;
  @Input() imageUrl = '';
  @Input() imageTitle = '';
  @Input() currentIndex = 0;
  @Input() totalImages = 0;

  @Output() close = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();

  onBackdropClick(): void {
    this.close.emit();
  }

  onPrevious(event: Event): void {
    event.stopPropagation();
    this.previous.emit();
  }

  onNext(event: Event): void {
    event.stopPropagation();
    this.next.emit();
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.close.emit();
    } else if (event.key === 'ArrowLeft') {
      this.previous.emit();
    } else if (event.key === 'ArrowRight') {
      this.next.emit();
    }
  }
}
