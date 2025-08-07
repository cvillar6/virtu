import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-data-card',
  imports: [CommonModule],
  templateUrl: './result-data-card.html',
  styleUrl: './result-data-card.css'
})
export class ResultDataCard {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() data: number = 0;
}
