import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IIndustry } from '../../interfaces/industry';

@Component({
  selector: 'app-industry',
  imports: [],
  templateUrl: './industry.html',
  styleUrl: './industry.css'
})
export class Industry {
  @Input() industry!: IIndustry;
  @Input() index!: number;
  @Output() industryClick = new EventEmitter<number>();

  onIndustryClick() {
    this.industryClick.emit(this.index);
  }
}
