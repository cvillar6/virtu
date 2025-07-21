import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-feature-card',
  imports: [],
  templateUrl: './hero-feature-card.html',
  styleUrl: './hero-feature-card.css'
})
export class HeroFeatureCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
