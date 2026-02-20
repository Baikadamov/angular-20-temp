# Angular 20 Project Template Specification

> Give this file to Claude to scaffold a new Angular 20 project with this exact architecture.
> Replace all `{{APP_NAME}}` and `{{DOMAIN}}` placeholders with your project-specific values.

---

## Task

Scaffold a production-ready Angular 20 SPA using the architecture, libraries, folder structure, and patterns described below.
Project name: `{{APP_NAME}}`
Domain/API base: `{{DOMAIN}}`

Create every file listed in the **File Tree** section with the exact content specified in the **File Contents** section.
Do not skip any file. After creating all files run `npm install`.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Angular 20 (standalone components, no NgModules) |
| Language | TypeScript 5.8 (strict mode) |
| State | Angular Signals (no NgRx) |
| Styling | Tailwind CSS v4 + DaisyUI v5 |
| Icons | lucide-angular |
| HTTP | Angular HttpClient + functional interceptors |
| Forms | ReactiveFormsModule |
| Testing | Karma + Jasmine |
| Build | Angular CLI v20 (`@angular/build:application`) |
| Package manager | npm |

---

## File Tree

```
{{APP_NAME}}/
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── config/
│   │   │   ├── index.ts
│   │   │   ├── brand.config.ts
│   │   │   └── theme.config.ts
│   │   ├── constants/
│   │   │   ├── index.ts
│   │   │   └── app.constants.ts
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   │   ├── index.ts
│   │   │   │   └── auth.guard.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── index.ts
│   │   │   │   ├── auth.interceptor.ts
│   │   │   │   └── http-error.interceptor.ts
│   │   │   ├── models/
│   │   │   │   ├── index.ts
│   │   │   │   ├── enums/
│   │   │   │   │   └── user-role.enum.ts
│   │   │   │   └── interfaces/
│   │   │   │       └── user.interface.ts
│   │   │   └── services/
│   │   │       ├── index.ts
│   │   │       ├── api.service.ts
│   │   │       ├── auth.service.ts
│   │   │       └── user.service.ts
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   │   ├── index.ts
│   │   │   │   ├── breadcrumbs/
│   │   │   │   │   ├── breadcrumbs.component.ts
│   │   │   │   │   └── breadcrumbs.component.html
│   │   │   │   ├── pagination/
│   │   │   │   │   ├── pagination.component.ts
│   │   │   │   │   └── pagination.component.html
│   │   │   │   └── toast/
│   │   │   │       ├── toast.component.ts
│   │   │   │       └── toast.component.html
│   │   │   ├── directives/
│   │   │   │   └── index.ts
│   │   │   ├── guards/
│   │   │   │   ├── index.ts
│   │   │   │   └── unsaved-changes.guard.ts
│   │   │   ├── pipes/
│   │   │   │   ├── index.ts
│   │   │   │   └── truncate.pipe.ts
│   │   │   └── services/
│   │   │       ├── index.ts
│   │   │       ├── toast.service.ts
│   │   │       └── sidebar.service.ts
│   │   ├── layout/
│   │   │   ├── index.ts
│   │   │   ├── main-layout/
│   │   │   │   ├── main-layout.component.ts
│   │   │   │   └── main-layout.component.html
│   │   │   ├── admin-layout/
│   │   │   │   ├── admin-layout.component.ts
│   │   │   │   └── admin-layout.component.html
│   │   │   └── components/
│   │   │       ├── header/
│   │   │       │   ├── header.component.ts
│   │   │       │   └── header.component.html
│   │   │       └── sidebar/
│   │   │           ├── sidebar.component.ts
│   │   │           └── sidebar.component.html
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   └── pages/
│   │   │   │       └── login/
│   │   │   │           ├── login.component.ts
│   │   │   │           └── login.component.html
│   │   │   └── dashboard/
│   │   │       └── dashboard.component.ts
│   │   ├── utils/
│   │   │   ├── index.ts
│   │   │   └── date.utils.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   └── app.routes.ts
│   ├── environments/
│   │   ├── environment.ts
│   │   ├── environment.prod.ts
│   │   └── environment.dev-prod.ts
│   ├── styles.css
│   ├── index.html
│   └── main.ts
├── .editorconfig
├── .gitignore
├── .postcssrc.json
├── angular.json
├── nginx.conf
├── package.json
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.spec.json
```

---

## package.json

```json
{
  "name": "{{APP_NAME}}",
  "version": "0.0.1",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "start:prod-api": "ng serve --configuration dev-prod-api",
    "build": "ng build --configuration production",
    "build:dev": "ng build --configuration development",
    "watch": "ng build --watch --configuration development",
    "test": "ng test"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^20.0.0",
    "@angular/compiler": "^20.0.0",
    "@angular/core": "^20.0.0",
    "@angular/forms": "^20.0.0",
    "@angular/platform-browser": "^20.0.0",
    "@angular/router": "^20.0.0",
    "@tailwindcss/postcss": "^4.1.14",
    "daisyui": "^5.5.14",
    "lucide-angular": "^0.563.0",
    "postcss": "^8.5.6",
    "rxjs": "~7.8.0",
    "tailwindcss": "^4.1.14",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular/build": "^20.0.2",
    "@angular/cli": "^20.0.2",
    "@angular/compiler-cli": "^20.0.0",
    "@types/jasmine": "~5.1.0",
    "jasmine-core": "~5.7.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.8.2"
  }
}
```

---

## tsconfig.json

```json
{
  "compileOnSave": false,
  "compilerOptions": {
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "experimentalDecorators": true,
    "importHelpers": true,
    "target": "ES2022",
    "module": "preserve"
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "typeCheckHostBindings": true,
    "strictTemplates": true
  }
}
```

## tsconfig.app.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": [],
    "baseUrl": "./",
    "paths": {
      "@app/*":          ["src/app/*"],
      "@core/*":         ["src/app/core/*"],
      "@models":         ["src/app/core/models/index.ts"],
      "@models/*":       ["src/app/core/models/*"],
      "@shared/*":       ["src/app/shared/*"],
      "@features/*":     ["src/app/features/*"],
      "@layout/*":       ["src/app/layout/*"],
      "@utils":          ["src/app/utils/index.ts"],
      "@utils/*":        ["src/app/utils/*"],
      "@constants":      ["src/app/constants/index.ts"],
      "@constants/*":    ["src/app/constants/*"],
      "@environments/*": ["src/environments/*"]
    }
  },
  "include": ["src/**/*.ts"],
  "exclude": ["src/**/*.spec.ts"]
}
```

## tsconfig.spec.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jasmine"]
  },
  "include": ["src/**/*.ts"]
}
```

---

## angular.json

```json
{
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "{{APP_NAME}}": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": { "standalone": false },
        "@schematics/angular:directive":  { "standalone": false },
        "@schematics/angular:pipe":       { "standalone": false }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular/build:application",
          "options": {
            "outputPath": "dist/{{APP_NAME}}",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": ["zone.js"],
            "tsConfig": "tsconfig.app.json",
            "assets": [{ "glob": "**/*", "input": "public" }],
            "styles": ["src/styles.css"],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "budgets": [
                { "type": "initial", "maximumWarning": "1mb", "maximumError": "2mb" },
                { "type": "anyComponentStyle", "maximumWarning": "100kB", "maximumError": "200kB" }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            },
            "dev-prod-api": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true,
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.dev-prod.ts"
                }
              ]
            }
          },
          "defaultConfiguration": "development"
        },
        "serve": {
          "builder": "@angular/build:dev-server",
          "configurations": {
            "production":   { "buildTarget": "{{APP_NAME}}:build:production" },
            "development":  { "buildTarget": "{{APP_NAME}}:build:development" },
            "dev-prod-api": { "buildTarget": "{{APP_NAME}}:build:dev-prod-api" }
          },
          "defaultConfiguration": "development"
        },
        "test": {
          "builder": "@angular/build:karma",
          "options": {
            "polyfills": ["zone.js", "zone.js/testing"],
            "tsConfig": "tsconfig.spec.json",
            "assets": [{ "glob": "**/*", "input": "public" }],
            "styles": ["src/styles.css"]
          }
        }
      }
    }
  },
  "cli": { "analytics": false }
}
```

---

## .postcssrc.json

```json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

## .editorconfig

```ini
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.ts]
quote_type = single
ij_typescript_use_double_quotes = false

[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

## nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

---

## src/styles.css

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";
@plugin "daisyui";

@theme {
  /* ─── Typography ─── */
  --font-family-sans: 'Inter', system-ui, sans-serif;

  --font-size-2xs: 0.625rem;   /* 10px  micro / timestamps */
  --font-size-xs:  0.75rem;    /* 12px  captions */
  --font-size-sm:  0.875rem;   /* 14px  body */
  --font-size-base:1rem;       /* 16px  section titles */
  --font-size-lg:  1.125rem;   /* 18px  card titles */
  --font-size-xl:  1.25rem;    /* 20px  page titles */
  --font-size-2xl: 1.5rem;     /* 24px  large display */
  --font-size-3xl: 1.875rem;   /* 30px  hero titles */

  /* ─── Brand colors (OKLch) ─── */
  --color-brand-50:  oklch(0.97 0.02 250);
  --color-brand-100: oklch(0.94 0.04 250);
  --color-brand-200: oklch(0.88 0.07 250);
  --color-brand-300: oklch(0.80 0.10 250);
  --color-brand-400: oklch(0.68 0.13 250);
  --color-brand-500: oklch(0.55 0.15 250);
  --color-brand-600: oklch(0.46 0.14 250);
  --color-brand-700: oklch(0.38 0.12 250);
  --color-brand-800: oklch(0.30 0.09 250);
  --color-brand-900: oklch(0.23 0.06 250);
  --color-brand-950: oklch(0.15 0.04 250);

  /* ─── Accent colors ─── */
  --color-accent-50:  oklch(0.97 0.02 145);
  --color-accent-100: oklch(0.93 0.05 145);
  --color-accent-200: oklch(0.87 0.09 145);
  --color-accent-300: oklch(0.78 0.14 145);
  --color-accent-400: oklch(0.70 0.18 145);
  --color-accent-500: oklch(0.65 0.20 145);
  --color-accent-600: oklch(0.55 0.18 145);
  --color-accent-700: oklch(0.45 0.15 145);
  --color-accent-800: oklch(0.36 0.11 145);
  --color-accent-900: oklch(0.28 0.08 145);

  /* ─── Semantic colors ─── */
  --color-success: oklch(0.72 0.19 142);
  --color-warning: oklch(0.80 0.18 85);
  --color-error:   oklch(0.65 0.22 25);
  --color-info:    oklch(0.70 0.15 230);

  /* ─── Border radius ─── */
  --radius-sm:   0.375rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.75rem;
  --radius-xl:   1rem;
  --radius-2xl:  1.25rem;
  --radius-3xl:  1.5rem;
  --radius-full: 9999px;

  /* ─── Shadows ─── */
  --shadow-card:     0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-dropdown: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-modal:    0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

/* ─── Typography utility classes ─── */
@layer utilities {
  .text-page-title       { font-size: var(--font-size-xl);   font-weight: 700; }
  .text-page-subtitle    { font-size: var(--font-size-sm);   color: theme(colors.gray.600); }
  .text-card-title       { font-size: var(--font-size-lg);   font-weight: 600; }
  .text-section-title    { font-size: var(--font-size-base); font-weight: 600; }
  .text-subsection-title { font-size: var(--font-size-sm);   font-weight: 600; }
  .text-body             { font-size: var(--font-size-sm); }
  .text-body-muted       { font-size: var(--font-size-sm);   color: theme(colors.gray.600); }
  .text-label            { font-size: var(--font-size-sm);   font-weight: 500; }
  .text-caption          { font-size: var(--font-size-xs); }
  .text-caption-muted    { font-size: var(--font-size-xs);   color: theme(colors.gray.400); }
  .text-micro            { font-size: var(--font-size-2xs);  color: theme(colors.gray.400); }
  .text-display          { font-size: var(--font-size-2xl);  font-weight: 700; }

  .card-surface {
    background-color: white;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-card);
  }
}

/* ─── Animations ─── */
@keyframes slide-in-right {
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0);    opacity: 1; }
}

.animate-slide-in { animation: slide-in-right 0.3s ease-out; }

/* ─── Base ─── */
* { font-family: var(--font-family-sans); }
```

---

## src/index.html

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>{{APP_NAME}}</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

---

## src/main.ts

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { authInterceptor } from './app/core/interceptors';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
}).catch(err => console.error(err));
```

---

## src/environments/environment.ts

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://127.0.0.1:8000/api',
  apiTimeout: 30000,
  enableDebug: true,
};
```

## src/environments/environment.prod.ts

```typescript
export const environment = {
  production: true,
  apiUrl: 'https://{{DOMAIN}}/api',
  apiTimeout: 30000,
  enableDebug: false,
};
```

## src/environments/environment.dev-prod.ts

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://{{DOMAIN}}/api',
  apiTimeout: 30000,
  enableDebug: true,
};
```

---

## src/app/app.component.ts

```typescript
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastComponent } from '@shared/components';
import { BRAND_CONFIG } from './config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private titleService = inject(Title);

  ngOnInit(): void {
    this.titleService.setTitle(BRAND_CONFIG.name);
  }
}
```

## src/app/app.component.html

```html
<router-outlet />
<app-toast />
```

## src/app/app.routes.ts

```typescript
import { Routes } from '@angular/router';
import { authGuard, guestGuard, roleGuard } from '@core/guards';
import { UnsavedChangesGuard } from '@shared/guards';
import { UserRole } from '@models';

import { MainLayoutComponent }  from '@layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from '@layout/admin-layout/admin-layout.component';
import { LoginComponent }       from '@features/auth/pages/login/login.component';
import { DashboardComponent }   from '@features/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [guestGuard],
  },
  {
    path: 'manage',
    component: AdminLayoutComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: [UserRole.ADMIN, UserRole.MODERATOR] },
    children: [
      // Add admin child routes here
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      // Add feature routes here
    ],
  },
  { path: '**', redirectTo: '' },
];
```

---

## src/app/config/brand.config.ts

```typescript
export const BRAND_CONFIG = {
  name: '{{APP_NAME}}',
  shortName: '{{APP_NAME}}',
  description: 'Description of {{APP_NAME}}',
  seo: {
    title: '{{APP_NAME}}',
    description: 'Description',
    keywords: [],
  },
} as const;
```

## src/app/config/theme.config.ts

```typescript
export const THEME_CONFIG = {
  colors: {
    primary: 'primary',
    secondary: 'secondary',
    accent: 'accent',
    neutral: 'neutral',
  },
  fonts: {
    sans: 'Inter, system-ui, sans-serif',
    heading: 'Inter, system-ui, sans-serif',
  },
} as const;

export const TYPOGRAPHY_CONFIG = {
  pageTitle:        { cssClass: 'text-page-title',       tailwind: 'text-xl font-bold' },
  pageSubtitle:     { cssClass: 'text-page-subtitle',    tailwind: 'text-sm text-gray-600' },
  cardTitle:        { cssClass: 'text-card-title',       tailwind: 'text-lg font-semibold' },
  sectionTitle:     { cssClass: 'text-section-title',    tailwind: 'text-base font-semibold' },
  subsectionTitle:  { cssClass: 'text-subsection-title', tailwind: 'text-sm font-semibold' },
  body:             { cssClass: 'text-body',             tailwind: 'text-sm' },
  bodyMuted:        { cssClass: 'text-body-muted',       tailwind: 'text-sm text-gray-600' },
  label:            { cssClass: 'text-label',            tailwind: 'text-sm font-medium' },
  caption:          { cssClass: 'text-caption',          tailwind: 'text-xs' },
  captionMuted:     { cssClass: 'text-caption-muted',    tailwind: 'text-xs text-gray-400' },
  micro:            { cssClass: 'text-micro',            tailwind: 'text-[10px] text-gray-400' },
  display:          { cssClass: 'text-display',          tailwind: 'text-2xl font-bold' },
} as const;

export const HEADING_HIERARCHY = {
  h1: 'text-page-title',
  h2: 'text-card-title',
  h3: 'text-section-title',
  h4: 'text-subsection-title',
} as const;

export const NAV_CONFIG = {
  sidebarItems: [
    { label: 'Главная', path: '/', icon: 'LayoutDashboard' },
  ],
} as const;
```

## src/app/config/index.ts

```typescript
export * from './brand.config';
export * from './theme.config';
```

---

## src/app/constants/app.constants.ts

```typescript
export const APP_CONSTANTS = {
  pagination: {
    defaultPageSize: 10,
    pageSizeOptions: [10, 25, 50],
  },
  auth: {
    tokenRefreshThreshold: 5 * 60 * 1000, // 5 min
  },
} as const;

export const STORAGE_KEYS = {
  accessToken:  'access_token',
  refreshToken: 'refresh_token',
  currentUser:  'current_user',
} as const;

export const API_ENDPOINTS = {
  auth: {
    login:   '/auth/token/',
    refresh: '/auth/token/refresh/',
    logout:  '/auth/logout/',
  },
  users: {
    me: '/users/me/',
  },
} as const;
```

## src/app/constants/index.ts

```typescript
export * from './app.constants';
```

---

## src/app/core/models/enums/user-role.enum.ts

```typescript
export enum UserRole {
  ADMIN     = 'admin',
  MODERATOR = 'moderator',
  TEACHER   = 'teacher',
  STUDENT   = 'student',
}
```

## src/app/core/models/interfaces/user.interface.ts

```typescript
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
```

## src/app/core/models/index.ts

```typescript
export * from './enums/user-role.enum';
export * from './interfaces/user.interface';
```

---

## src/app/core/services/api.service.ts

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}${endpoint}`, { params });
  }

  post<T>(endpoint: string, body: unknown): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}${endpoint}`, body);
  }

  put<T>(endpoint: string, body: unknown): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}${endpoint}`, body);
  }

  patch<T>(endpoint: string, body: unknown): Observable<T> {
    return this.http.patch<T>(`${this.apiUrl}${endpoint}`, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}${endpoint}`);
  }
}
```

## src/app/core/services/auth.service.ts

```typescript
import { Injectable, signal, computed } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import {
  User, LoginRequest, TokenResponse, TokenRefreshResponse,
} from '@models';
import { STORAGE_KEYS, API_ENDPOINTS } from '@constants';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly _currentUser = signal<User | null>(this.loadUserFromStorage());

  readonly currentUser  = this._currentUser.asReadonly();
  readonly isAuthenticated = computed(() => !!this._currentUser());
  readonly userRole        = computed(() => this._currentUser()?.role ?? null);

  constructor(private apiService: ApiService) {}

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
```

## src/app/core/services/user.service.ts

```typescript
import { Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from './api.service';
import { UserMe, UserUpdateRequest, UserUpdateResponse } from '@models';
import { API_ENDPOINTS } from '@constants';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly _userMe = signal<UserMe | null>(null);
  readonly userMe = this._userMe.asReadonly();

  constructor(private apiService: ApiService) {}

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
```

## src/app/core/services/index.ts

```typescript
export * from './api.service';
export * from './auth.service';
export * from './user.service';
```

---

## src/app/core/guards/auth.guard.ts

```typescript
import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '@core/services';
import { UserRole } from '@models';

export const authGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  return auth.isAuthenticated() ? true : router.createUrlTree(['/login']);
};

export const guestGuard: CanActivateFn = () => {
  const auth   = inject(AuthService);
  const router = inject(Router);
  return !auth.isAuthenticated() ? true : router.createUrlTree(['/']);
};

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const auth   = inject(AuthService);
  const router = inject(Router);

  if (!auth.isAuthenticated()) return router.createUrlTree(['/login']);

  const required = route.data['roles'] as UserRole[] | undefined;
  if (!required?.length) return true;

  return auth.hasAnyRole(required) ? true : router.createUrlTree(['/']);
};
```

## src/app/core/guards/index.ts

```typescript
export * from './auth.guard';
```

---

## src/app/core/interceptors/auth.interceptor.ts

```typescript
import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpErrorResponse, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { throwError, BehaviorSubject, Observable } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
import { AuthService } from '@core/services';

const TOKEN_ENDPOINTS = ['/auth/token/', '/auth/token/refresh/'];

function isTokenEndpoint(url: string): boolean {
  return TOKEN_ENDPOINTS.some(ep => url.includes(ep));
}

function addAuthHeader(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
}

let isRefreshing = false;
const refreshTokenSubject = new BehaviorSubject<string | null>(null);

function handleUnauthorized(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
  auth: AuthService,
): Observable<unknown> {
  if (!isRefreshing) {
    isRefreshing = true;
    refreshTokenSubject.next(null);

    return auth.refreshToken().pipe(
      switchMap(res => {
        isRefreshing = false;
        refreshTokenSubject.next(res.access);
        return next(addAuthHeader(req, res.access));
      }),
      catchError(err => {
        isRefreshing = false;
        auth.logout();
        return throwError(() => err);
      }),
    );
  }

  return refreshTokenSubject.pipe(
    filter(token => token !== null),
    take(1),
    switchMap(token => next(addAuthHeader(req, token!))),
  );
}

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(AuthService);

  if (isTokenEndpoint(req.url)) return next(req);

  const token = auth.getAccessToken();
  const authReq = token ? addAuthHeader(req, token) : req;

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 401 && !isRefreshing) {
        return handleUnauthorized(req, next, auth);
      }
      return throwError(() => err);
    }),
  );
};
```

## src/app/core/interceptors/http-error.interceptor.ts

```typescript
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastService } from '@shared/services';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const toast = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        toast.error('Ошибка соединения с сервером');
      } else if (error.status >= 500) {
        toast.error('Ошибка сервера. Попробуйте позже');
      }
      return throwError(() => error);
    }),
  );
};
```

## src/app/core/interceptors/index.ts

```typescript
export * from './auth.interceptor';
export * from './http-error.interceptor';
```

---

## src/app/shared/services/toast.service.ts

```typescript
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
```

## src/app/shared/services/sidebar.service.ts

```typescript
import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SidebarService {
  private readonly _isOpen = signal(false);
  readonly isOpen = this._isOpen.asReadonly();

  toggle(): void { this._isOpen.update(v => !v); }
  open():   void { this._isOpen.set(true);  }
  close():  void { this._isOpen.set(false); }
}
```

## src/app/shared/services/index.ts

```typescript
export * from './toast.service';
export * from './sidebar.service';
```

---

## src/app/shared/guards/unsaved-changes.guard.ts

```typescript
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface HasUnsavedChanges {
  hasUnsavedChanges(): boolean;
}

@Injectable({ providedIn: 'root' })
export class UnsavedChangesGuard implements CanDeactivate<HasUnsavedChanges> {
  canDeactivate(component: HasUnsavedChanges): boolean {
    if (component.hasUnsavedChanges?.()) {
      return confirm('У вас есть несохранённые изменения. Покинуть страницу?');
    }
    return true;
  }
}
```

## src/app/shared/guards/index.ts

```typescript
export * from './unsaved-changes.guard';
```

---

## src/app/shared/pipes/truncate.pipe.ts

```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncate', standalone: true })
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 100, trail = '…'): string {
    return value.length > limit ? value.slice(0, limit) + trail : value;
  }
}
```

## src/app/shared/pipes/index.ts

```typescript
export * from './truncate.pipe';
```

## src/app/shared/directives/index.ts

```typescript
// Add shared directives here
```

---

## src/app/shared/components/toast/toast.component.ts

```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService, Toast } from '@shared/services';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
})
export class ToastComponent {
  readonly toastService = inject(ToastService);
}
```

## src/app/shared/components/toast/toast.component.html

```html
<div class="fixed top-4 right-4 z-50 flex flex-col gap-2 w-80">
  @for (toast of toastService.toasts(); track toast.id) {
    <div
      class="alert animate-slide-in shadow-dropdown"
      [class.alert-success]="toast.type === 'success'"
      [class.alert-error]="toast.type === 'error'"
      [class.alert-warning]="toast.type === 'warning'"
      [class.alert-info]="toast.type === 'info'"
    >
      <div class="flex-1">
        @if (toast.title) {
          <p class="text-label">{{ toast.title }}</p>
        }
        <p class="text-body">{{ toast.message }}</p>
      </div>
      <button class="btn btn-ghost btn-xs" (click)="toastService.remove(toast.id)">✕</button>
    </div>
  }
</div>
```

## src/app/shared/components/pagination/pagination.component.ts

```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() currentPage = 1;
  @Input() totalPages  = 1;
  @Output() pageChange = new EventEmitter<number>();

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
```

## src/app/shared/components/pagination/pagination.component.html

```html
<div class="join">
  @for (page of pages; track page) {
    <button
      class="join-item btn btn-sm"
      [class.btn-active]="page === currentPage"
      (click)="pageChange.emit(page)"
    >
      {{ page }}
    </button>
  }
</div>
```

## src/app/shared/components/breadcrumbs/breadcrumbs.component.ts

```typescript
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface Breadcrumb {
  label: string;
  path?: string;
}

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumbs.component.html',
})
export class BreadcrumbsComponent {
  @Input() items: Breadcrumb[] = [];
}
```

## src/app/shared/components/breadcrumbs/breadcrumbs.component.html

```html
<div class="breadcrumbs text-sm">
  <ul>
    @for (item of items; track item.label) {
      <li>
        @if (item.path) {
          <a [routerLink]="item.path">{{ item.label }}</a>
        } @else {
          {{ item.label }}
        }
      </li>
    }
  </ul>
</div>
```

## src/app/shared/components/index.ts

```typescript
export * from './toast/toast.component';
export * from './pagination/pagination.component';
export * from './breadcrumbs/breadcrumbs.component';
```

---

## src/app/layout/main-layout/main-layout.component.ts

```typescript
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent }  from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SidebarService }   from '@shared/services';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  readonly sidebarService = inject(SidebarService);
}
```

## src/app/layout/main-layout/main-layout.component.html

```html
<div class="min-h-screen bg-base-200">
  <app-header />
  <div class="flex">
    <app-sidebar />
    <main class="flex-1 p-6">
      <router-outlet />
    </main>
  </div>
</div>
```

## src/app/layout/admin-layout/admin-layout.component.ts

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent }  from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {}
```

## src/app/layout/admin-layout/admin-layout.component.html

```html
<div class="min-h-screen bg-base-200">
  <app-header [isAdmin]="true" />
  <div class="flex">
    <app-sidebar [isAdmin]="true" />
    <main class="flex-1 p-6">
      <router-outlet />
    </main>
  </div>
</div>
```

## src/app/layout/components/header/header.component.ts

```typescript
import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '@core/services';
import { SidebarService } from '@shared/services';
import { BRAND_CONFIG } from '@app/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() isAdmin = false;

  readonly authService    = inject(AuthService);
  readonly sidebarService = inject(SidebarService);
  readonly brand = BRAND_CONFIG;

  logout(): void {
    this.authService.logout();
  }
}
```

## src/app/layout/components/header/header.component.html

```html
<header class="navbar bg-base-100 shadow-card px-4">
  <div class="flex-none">
    <button class="btn btn-ghost btn-sm" (click)="sidebarService.toggle()">
      ☰
    </button>
  </div>
  <div class="flex-1">
    <a class="text-card-title" routerLink="/">{{ brand.name }}</a>
  </div>
  <div class="flex-none gap-2">
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost btn-circle avatar">
        <div class="w-8 rounded-full bg-base-300 flex items-center justify-center">
          {{ authService.currentUser()?.first_name?.[0] ?? 'U' }}
        </div>
      </button>
      <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a routerLink="/profile">Профиль</a></li>
        <li><button (click)="logout()">Выход</button></li>
      </ul>
    </div>
  </div>
</header>
```

## src/app/layout/components/sidebar/sidebar.component.ts

```typescript
import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarService } from '@shared/services';
import { NAV_CONFIG } from '@app/config';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() isAdmin = false;

  readonly sidebarService = inject(SidebarService);
  readonly navItems = NAV_CONFIG.sidebarItems;
}
```

## src/app/layout/components/sidebar/sidebar.component.html

```html
@if (sidebarService.isOpen()) {
  <aside class="w-64 min-h-screen bg-base-100 shadow-card">
    <ul class="menu p-4 gap-1">
      @for (item of navItems; track item.path) {
        <li>
          <a
            [routerLink]="item.path"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: item.path === '/' }"
          >
            {{ item.label }}
          </a>
        </li>
      }
    </ul>
  </aside>
}
```

## src/app/layout/index.ts

```typescript
export * from './main-layout/main-layout.component';
export * from './admin-layout/admin-layout.component';
```

---

## src/app/features/auth/pages/login/login.component.ts

```typescript
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '@core/services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private fb      = inject(FormBuilder);
  private router  = inject(Router);
  private auth    = inject(AuthService);

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  isLoading    = false;
  errorMessage = '';

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.isLoading    = true;
    this.errorMessage = '';

    const { username, password } = this.form.value;

    this.auth.login({ username: username!, password: password! }).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err: HttpErrorResponse) => {
        this.isLoading = false;
        this.errorMessage =
          err.status === 401 ? 'Неверный логин или пароль' :
          err.status === 0   ? 'Ошибка соединения с сервером' :
                               'Произошла ошибка. Попробуйте позже';
      },
    });
  }
}
```

## src/app/features/auth/pages/login/login.component.html

```html
<div class="min-h-screen flex items-center justify-center bg-base-200">
  <div class="card-surface p-8 w-full max-w-sm">
    <h1 class="text-page-title mb-6">Вход</h1>

    @if (errorMessage) {
      <div class="alert alert-error mb-4 text-body">{{ errorMessage }}</div>
    }

    <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-4">
      <div class="form-control">
        <label class="label">
          <span class="text-label">Логин</span>
        </label>
        <input
          type="text"
          formControlName="username"
          class="input input-bordered"
          placeholder="username"
        />
      </div>

      <div class="form-control">
        <label class="label">
          <span class="text-label">Пароль</span>
        </label>
        <input
          type="password"
          formControlName="password"
          class="input input-bordered"
          placeholder="••••••"
        />
      </div>

      <button type="submit" class="btn btn-primary" [disabled]="isLoading">
        @if (isLoading) {
          <span class="loading loading-spinner loading-sm"></span>
        }
        Войти
      </button>
    </form>
  </div>
</div>
```

---

## src/app/features/dashboard/dashboard.component.ts

```typescript
import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '@core/services';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <div>
      <h1 class="text-page-title">Главная</h1>
      <p class="text-page-subtitle">Добро пожаловать, {{ userService.userMe()?.first_name ?? '' }}</p>
    </div>
  `,
})
export class DashboardComponent implements OnInit {
  readonly userService = inject(UserService);

  ngOnInit(): void {
    this.userService.getMe().subscribe();
  }
}
```

---

## src/app/utils/date.utils.ts

```typescript
export class DateUtils {
  static formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium' }).format(new Date(date));
  }

  static formatDateTime(date: string | Date): string {
    return new Intl.DateTimeFormat('ru-RU', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(date));
  }

  static timeAgo(date: string | Date): string {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    const rtf = new Intl.RelativeTimeFormat('ru', { numeric: 'auto' });
    if (seconds < 60)   return rtf.format(-seconds, 'second');
    if (seconds < 3600) return rtf.format(-Math.floor(seconds / 60), 'minute');
    if (seconds < 86400) return rtf.format(-Math.floor(seconds / 3600), 'hour');
    return rtf.format(-Math.floor(seconds / 86400), 'day');
  }
}
```

## src/app/utils/index.ts

```typescript
export * from './date.utils';
```

---

## Conventions to follow when extending the template

### New feature checklist

```
features/
└── feature-name/
    ├── models/
    │   ├── feature.interface.ts   ← All TypeScript interfaces
    │   └── index.ts               ← Barrel export
    ├── services/
    │   ├── feature.service.ts     ← API calls via ApiService
    │   └── index.ts               ← Barrel export
    ├── pages/
    │   └── feature-list/
    │       ├── feature-list.component.ts
    │       └── feature-list.component.html
    ├── components/                ← Reusable subcomponents
    └── index.ts                   ← Barrel export
```

### Service pattern

```typescript
@Injectable({ providedIn: 'root' })
export class FeatureService {
  private readonly _items = signal<Item[]>([]);
  readonly items = this._items.asReadonly();
  readonly isLoading = signal(false);

  constructor(private api: ApiService) {}

  getItems(): Observable<Item[]> {
    this.isLoading.set(true);
    return this.api.get<Item[]>('/items/').pipe(
      tap(items => { this._items.set(items); this.isLoading.set(false); }),
      catchError(err => { this.isLoading.set(false); return throwError(() => err); }),
    );
  }
}
```

### Component pattern

```typescript
@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
})
export class FeatureComponent implements OnInit {
  private featureService = inject(FeatureService);

  readonly items    = this.featureService.items;
  readonly isLoading = this.featureService.isLoading;

  ngOnInit(): void {
    this.featureService.getItems().subscribe();
  }
}
```

### Typography classes reference

| Class | Size | Weight | Use for |
|---|---|---|---|
| `text-display` | 24px | bold | Hero headings |
| `text-page-title` | 20px | bold | `<h1>` page heading |
| `text-page-subtitle` | 14px | normal | Description under h1 |
| `text-card-title` | 18px | semibold | `<h2>` card heading |
| `text-section-title` | 16px | semibold | `<h3>` section heading |
| `text-subsection-title` | 14px | semibold | `<h4>` subheading |
| `text-body` | 14px | normal | Paragraphs |
| `text-body-muted` | 14px | normal | Secondary text |
| `text-label` | 14px | medium | Form labels |
| `text-caption` | 12px | normal | Captions |
| `text-caption-muted` | 12px | normal | Secondary captions |
| `text-micro` | 10px | normal | Timestamps, metadata |

### Path aliases

```typescript
import { ApiService }      from '@core/services';
import { AuthService }     from '@core/services';
import { User, UserRole }  from '@models';
import { ToastService }    from '@shared/services';
import { TruncatePipe }    from '@shared/pipes';
import { APP_CONSTANTS }   from '@constants';
import { BRAND_CONFIG }    from '@app/config';
import { environment }     from '@environments/environment';
```

### Guard usage in routes

```typescript
// Authenticated only
{ path: 'profile', component: ProfileComponent, canActivate: [authGuard] }

// Admin/Moderator only
{
  path: 'manage',
  canActivate: [authGuard, roleGuard],
  data: { roles: [UserRole.ADMIN, UserRole.MODERATOR] },
  children: [...]
}

// Prevent leaving with unsaved changes
{
  path: 'edit/:id',
  component: EditComponent,
  canDeactivate: [UnsavedChangesGuard]
}
```
