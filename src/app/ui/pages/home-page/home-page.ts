import { Component } from '@angular/core';
import { DataCraft } from '../../components/data-craft/data-craft';
import { HeroFeatures } from '../../components/hero-features/hero-features';
import { Results } from '../../components/results/results';
import { SmarterSolutions } from '../../components/smarter-solutions/smarter-solutions';
import { TrustedBy } from '../../components/trusted-by/trusted-by';

@Component({
  selector: 'app-home-page',
  imports: [TrustedBy, SmarterSolutions, HeroFeatures, DataCraft, Results],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
}