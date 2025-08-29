import { CommonModule } from "@angular/common";
import { Component, Input } from '@angular/core';
import { IIndustrySection } from '../../interfaces/industry';

@Component({
  selector: 'app-industry-section',
  imports: [CommonModule],
  templateUrl: './industry-section.html',
  styleUrl: './industry-section.css'
})
export class IndustrySection {
  @Input() industrySection!: IIndustrySection;
  @Input() even!: boolean;
}
