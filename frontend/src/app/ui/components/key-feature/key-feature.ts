import { Component, Input } from '@angular/core';
import { IKeyFeature } from '../../interfaces/key-feature';

@Component({
  selector: 'app-key-feature',
  imports: [],
  templateUrl: './key-feature.html',
  styleUrl: './key-feature.css'
})
export class KeyFeature {
  @Input() keyFeature!: IKeyFeature;
}
