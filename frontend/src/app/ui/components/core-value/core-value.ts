import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ICoreValue } from '../../interfaces/core-value';

@Component({
  selector: 'app-core-value',
  imports: [CommonModule],
  templateUrl: './core-value.html',
  styleUrl: './core-value.css'
})
export class CoreValue {
  @Input() coreValue!: ICoreValue;
  @Input() tiny: boolean = false;
}
