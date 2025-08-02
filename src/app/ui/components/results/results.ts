import { Component } from '@angular/core';
import { ResultCard } from '../result-card/result-card';
import { ResultDataCard } from '../result-data-card/result-data-card';

@Component({
  selector: 'app-results',
  imports: [ResultCard, ResultDataCard],
  templateUrl: './results.html',
  styleUrl: './results.css'
})
export class Results {

}
