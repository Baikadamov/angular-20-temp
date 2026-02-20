import { UserRole } from '../enums/user-role.enum';

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  role: UserRole;
}

export interface UserProfile {
  phone?: string;
  avatar?: string;
  bio?: string;
  birth_date?: string;
}

export interface UserMe extends User {
  is_verified: boolean;
  date_joined: string;
  last_seen: string;
  profile: UserProfile;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface TokenResponse {
  access: string;
  refresh: string;
  user: User;
}

export interface TokenRefreshResponse {
  access: string;
}

export interface UserUpdateRequest {
  first_name?: string;
  last_name?: string;
  email?: string;
}

export interface UserUpdateResponse extends Partial<User> {}
