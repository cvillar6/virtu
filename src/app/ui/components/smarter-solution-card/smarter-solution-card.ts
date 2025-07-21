import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-smarter-solution-card',
  imports: [],
  templateUrl: './smarter-solution-card.html',
  styleUrl: './smarter-solution-card.css'
})
export class SmarterSolutionCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
}
