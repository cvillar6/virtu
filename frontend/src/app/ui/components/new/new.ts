import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INew } from '../../interfaces/new';

@Component({
  selector: 'app-new',
  imports: [RouterLink],
  templateUrl: './new.html',
  styleUrl: './new.css'
})
export class New {
  @Input() oNew!: INew;
}
