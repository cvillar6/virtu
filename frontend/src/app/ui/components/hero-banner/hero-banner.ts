import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [CommonModule],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css'
})
export class HeroBanner {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() description?: string;
  @Input() backgroundImage?: string;
  @Input() displayButton: boolean = false;
}
