import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IBookDemo } from '../../interfaces/book-demo';

@Component({
  selector: 'app-book-demo',
  imports: [RouterLink],
  templateUrl: './book-demo.html',
  styleUrl: './book-demo.css'
})
export class BookDemo {
  @Input() bookDemo!: IBookDemo;
}
