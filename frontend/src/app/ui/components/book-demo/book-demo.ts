import { Component, Input } from '@angular/core';
import { IBookDemo } from '../../interfaces/book-demo';

@Component({
  selector: 'app-book-demo',
  imports: [],
  templateUrl: './book-demo.html',
  styleUrl: './book-demo.css'
})
export class BookDemo {
  @Input() bookDemo!: IBookDemo;
}
