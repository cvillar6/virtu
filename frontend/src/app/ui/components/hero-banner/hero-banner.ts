import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IHeroBanner } from '../../interfaces/hero-banner';

@Component({
  selector: 'app-hero-banner',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css'
})
export class HeroBanner {
  @Input() heroBanner!: IHeroBanner;
}
