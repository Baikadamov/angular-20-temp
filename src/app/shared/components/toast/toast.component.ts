import { Component, inject } from '@angular/core';
import { ToastService } from '@shared/services';

@Component({
  selector: 'app-toast',
  standalone: true,
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  readonly toastService = inject(ToastService);
}
