import { Component, input } from '@angular/core';

export interface Breadcrumb {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  readonly items = input<Breadcrumb[]>([]);
}
