import { Component } from '@angular/core';
import { SbBtnComponent } from "./components/sb-btn/sb-btn.component";
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SbBtnComponent, NgClass],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  isExpanded = false;

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
