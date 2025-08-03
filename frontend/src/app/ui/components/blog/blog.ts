import { Component, Input } from '@angular/core';
import { IBlog } from '../../interfaces/blog';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  @Input() blog!: IBlog;
}
