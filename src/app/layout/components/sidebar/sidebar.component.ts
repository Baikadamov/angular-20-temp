import { Component, input, inject } from '@angular/core';
import { SidebarService } from '@shared/services';
import { NAV_CONFIG } from '@app/config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  readonly isAdmin = input(false);

  readonly sidebarService = inject(SidebarService);
  readonly navItems = NAV_CONFIG.sidebarItems;
}
