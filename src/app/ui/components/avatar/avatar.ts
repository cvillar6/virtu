import { Component, Input } from '@angular/core';
import { IAvatar } from '../../interfaces/avatar';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class Avatar {
  @Input() avatar!: IAvatar;
}
