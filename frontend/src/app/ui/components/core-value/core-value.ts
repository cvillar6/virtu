import { Component, Input } from '@angular/core';
import { ICoreValue } from '../../interfaces/core-value';

@Component({
  selector: 'app-core-value',
  imports: [],
  templateUrl: './core-value.html',
  styleUrl: './core-value.css'
})
export class CoreValue {
  @Input() coreValue!: ICoreValue;
}
