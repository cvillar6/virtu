import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-card',
  imports: [],
  templateUrl: './result-card.html',
  styleUrl: './result-card.css'
})
export class ResultCard {
  @Input() image: string = '';
  @Input() description: string = '';
  @Input() backgroundColorClass: string = '';
  @Input() hoverBackgroundColorClass: string = '';

}
