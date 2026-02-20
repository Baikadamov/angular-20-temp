import { Component, input, inject } from '@angular/core';
import { AuthService } from '@core/services';
import { SidebarService } from '@shared/services';
import { BRAND_CONFIG } from '@app/config';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly isAdmin = input(false);

  readonly authService    = inject(AuthService);
  readonly sidebarService = inject(SidebarService);
  readonly brand = BRAND_CONFIG;

  logout(): void {
    this.authService.logout();
  }
}
