import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-display-component',
  imports: [CommonModule],
  templateUrl: './display-component.component.html',
  styleUrl: './display-component.component.css'
})
export class DisplayComponentComponent {
  @Input() dataTODisplay :any[]=[] ;
}
