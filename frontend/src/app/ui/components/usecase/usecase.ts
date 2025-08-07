import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IUsecase } from '../../interfaces/usecase';

@Component({
  selector: 'app-usecase',
  imports: [RouterLink],
  templateUrl: './usecase.html',
  styleUrl: './usecase.css'
})
export class Usecase {
  @Input() usecase!: IUsecase;
}
