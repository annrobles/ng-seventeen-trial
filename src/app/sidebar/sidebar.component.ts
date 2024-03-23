import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.less'
})
export class SidebarComponent {
  navLinks: any[];
  
  constructor(private router: Router) {
    this.navLinks = this.router.config
      .filter(route => route.data && route.data['title'])
      .map(route => ({
        path: route.path,
        title: route.data?.['title']
      }))
  }
}
