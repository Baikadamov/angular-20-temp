import { Injectable, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import {
  User, LoginRequest, TokenResponse, TokenRefreshResponse,
} from '@models';
import { STORAGE_KEYS, API_ENDPOINTS } from '@constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiService = inject(ApiService);
  private readonly router = inject(Router);

  private readonly _currentUser = signal<User | null>(this.loadUserFromStorage());

  readonly currentUser  = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => !!this._currentUser());
  readonly userRole        = computed(() => this._currentUser()?.role ?? null);

  login(credentials: LoginRequest): Observable<TokenResponse> {
    return this.apiService.post<TokenResponse>(API_ENDPOINTS.auth.login, credentials).pipe(
      tap(response => {
        localStorage.setItem(STORAGE_KEYS.accessToken,  response.access);
        localStorage.setItem(STORAGE_KEYS.refreshToken, response.refresh);
        localStorage.setItem(STORAGE_KEYS.currentUser,  JSON.stringify(response.user));
        this._currentUser.set(response.user);
      }),
    );
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
    localStorage.removeItem(STORAGE_KEYS.currentUser);
    this._currentUser.set(null);
    this.router.navigate(['/login']);
  }

  refreshToken(): Observable<TokenRefreshResponse> {
    const refresh = this.getRefreshToken();
    return this.apiService.post<TokenRefreshResponse>(API_ENDPOINTS.auth.refresh, { refresh }).pipe(
      tap(response => localStorage.setItem(STORAGE_KEYS.accessToken, response.access)),
    );
  }

  getAccessToken():  string | null { return localStorage.getItem(STORAGE_KEYS.accessToken); }
  getRefreshToken(): string | null { return localStorage.getItem(STORAGE_KEYS.refreshToken); }

  hasRole(role: string): boolean {
    return this._currentUser()?.role === role;
  }

  hasAnyRole(roles: string[]): boolean {
    const role = this._currentUser()?.role;
    return role ? roles.includes(role) : false;
  }

  private loadUserFromStorage(): User | null {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.currentUser);
      return raw ? (JSON.parse(raw) as User) : null;
    } catch {
      return null;
    }
  }
}
