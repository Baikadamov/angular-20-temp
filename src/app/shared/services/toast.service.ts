import { Injectable, signal } from '@angular/core';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
  title?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {
  private readonly _toasts = signal<Toast[]>([]);
  readonly toasts = this._toasts.asReadonly();
  private nextId = 0;

  show(message: string, type: ToastType = 'info', title?: string, duration = 4000): void {
    const id = this.nextId++;
    this._toasts.update(ts => [...ts, { id, message, type, title }]);
    setTimeout(() => this.remove(id), duration);
  }

  success(msg: string, title?: string, duration?: number): void { this.show(msg, 'success', title, duration); }
  error  (msg: string, title?: string, duration?: number): void { this.show(msg, 'error',   title, duration); }
  warning(msg: string, title?: string, duration?: number): void { this.show(msg, 'warning', title, duration); }
  info   (msg: string, title?: string, duration?: number): void { this.show(msg, 'info',    title, duration); }

  remove(id: number): void { this._toasts.update(ts => ts.filter(t => t.id !== id)); }
  clear():            void { this._toasts.set([]); }
}
