import { Component, Input } from '@angular/core';
import { IIndustry } from '../../interfaces/industry';

@Component({
  selector: 'app-industry',
  imports: [],
  templateUrl: './industry.html',
  styleUrl: './industry.css'
})
export class Industry {
  @Input() industry!: IIndustry;
}
