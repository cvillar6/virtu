import { Component, Input } from '@angular/core';
import { IClient } from '../../interfaces/client';

@Component({
  selector: 'app-client',
  imports: [],
  templateUrl: './client.html',
  styleUrl: './client.css'
})
export class Client {
  @Input() client!: IClient;
}
