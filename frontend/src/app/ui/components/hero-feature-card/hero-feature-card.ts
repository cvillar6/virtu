import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-hero-feature-card',
  imports: [CommonModule, AnimateOnScroll],
  templateUrl: './hero-feature-card.html',
  styleUrl: './hero-feature-card.css'
})
export class HeroFeatureCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() imagePosition: 'left' | 'right' = 'left';
}
