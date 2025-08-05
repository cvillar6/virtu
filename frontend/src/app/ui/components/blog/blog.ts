import { Component, Input } from '@angular/core';
import { IBlog } from '../../interfaces/blog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
  @Input() blog!: IBlog;
}
