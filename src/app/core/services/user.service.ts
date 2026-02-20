import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { UserMe, UserUpdateRequest, UserUpdateResponse } from '@models';
import { API_ENDPOINTS } from '@constants';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly apiService = inject(ApiService);

  private readonly _userMe = signal<UserMe | null>(null);
  readonly userMe = this._userMe.asReadonly();

  getMe(): Observable<UserMe> {
    return this.apiService.get<UserMe>(API_ENDPOINTS.users.me).pipe(
      tap(user => this._userMe.set(user)),
    );
  }

  updateMe(data: UserUpdateRequest): Observable<UserUpdateResponse> {
    return this.apiService.patch<UserUpdateResponse>(API_ENDPOINTS.users.me, data).pipe(
      tap(() => this.getMe().subscribe()),
    );
  }

  clearUserData(): void {
    this._userMe.set(null);
  }
}
