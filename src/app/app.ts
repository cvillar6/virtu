import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './ui/shared/footer/footer';
import { Header } from './ui/shared/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {

}
