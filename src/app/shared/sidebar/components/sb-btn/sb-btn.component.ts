import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sb-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './sb-btn.component.html',
})
export class SbBtnComponent {
  @Input() showText: boolean = false;
  @Input() btnIcon: string = 'bi bi-exclamation-diamond'
}
