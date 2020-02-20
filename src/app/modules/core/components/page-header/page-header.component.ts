import { Component, HostListener } from '@angular/core';

import { EnvironmentService } from '@core/services/environment.service';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  isMenuCollapsed = false;
  isDesktop = window.innerWidth >= 1024;
  githubUrl = this.environmentService.githubUrl;

  constructor(private readonly environmentService: EnvironmentService) { }

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 1024;
  }

  toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
  }
}
