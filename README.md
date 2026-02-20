# Angular 20 Template

Angular 20 starter template for cloning and building new projects. Includes pre-configured architecture, services, guards, interceptors, and UI toolkit.

## Tech Stack

- **Angular** 20.3
- **Tailwind CSS** 4.x + **DaisyUI** 5.x (light theme)
- **Lucide Angular** — icons
- **RxJS** 7.8
- **TypeScript** 5.9

## Project Structure

```
src/app/
├── config/                  # Brand & theme configuration
│   ├── brand.config.ts      # App name, description, SEO
│   └── theme.config.ts
├── constants/               # API endpoints, storage keys, etc.
├── core/
│   ├── guards/              # authGuard, guestGuard, roleGuard
│   ├── interceptors/        # authInterceptor, httpErrorInterceptor
│   ├── models/
│   │   ├── enums/
│   │   └── interfaces/
│   └── services/            # ApiService, AuthService, UserService
├── features/
│   ├── auth/pages/login/    # Login page (stub)
│   └── dashboard/           # Dashboard page (stub)
├── layout/
│   ├── main-layout/         # Default layout with router-outlet
│   ├── admin-layout/        # Admin layout with router-outlet
│   └── components/
│       ├── header/          # Header component (stub)
│       └── sidebar/         # Sidebar component (stub)
├── shared/
│   ├── components/          # Pagination, Breadcrumbs, Toast
│   ├── directives/
│   ├── guards/              # unsavedChangesGuard (CanDeactivateFn)
│   ├── pipes/
│   └── services/            # SidebarService, ToastService
├── utils/
├── app.component.ts
└── app.routes.ts
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4200)
npm start

# Build for production
npm run build
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Dev server (`ng serve`) |
| `npm run start:prod-api` | Dev server against production API |
| `npm run build` | Production build |
| `npm run build:dev` | Development build |
| `npm run watch` | Watch mode build |
| `npm test` | Run unit tests |

## Configuration

### Brand

Edit `src/app/config/brand.config.ts` to set your app name, description, and SEO metadata.

### Environment

Three environment files in `src/environments/`:

| File | Purpose |
|------|---------|
| `environment.ts` | Local development (`http://127.0.0.1:8000/api`) |
| `environment.dev-prod.ts` | Dev build against production API |
| `environment.prod.ts` | Production build |

### Theme

- DaisyUI is locked to **light theme** (`data-theme="light"` in `index.html`)
- Custom brand/accent color palette defined in `src/styles.css` using OKLch
- Typography utility classes: `text-page-title`, `text-card-title`, `text-body`, `text-label`, etc.

## Architecture Notes

- **`inject()` everywhere** — services and components use `inject()` instead of constructor DI
- **Signal inputs/outputs** — components use `input()`, `output()` instead of `@Input()`/`@Output()` decorators
- **Functional guards** — `authGuard`, `guestGuard`, `roleGuard`, `unsavedChangesGuard` are all functions
- **Functional interceptors** — `authInterceptor` (token injection + refresh), `httpErrorInterceptor` (error handling)
- **Signals for state** — `AuthService`, `UserService` use Angular signals for reactive state
- **Component templates are stubs** — fill in your own markup; layout, header, sidebar, pages are empty shells ready to customize

## Routing

```
/           → MainLayoutComponent → DashboardComponent
/login      → LoginComponent
/manage     → AdminLayoutComponent (add child routes)
**          → redirect to /
```

Guards (`authGuard`, `guestGuard`, `roleGuard`) are available in `@core/guards` — wire them into routes when needed.

## Path Aliases

Configured in `tsconfig.app.json`:

| Alias | Path |
|-------|------|
| `@app/*` | `src/app/*` |
| `@core/*` | `src/app/core/*` |
| `@shared/*` | `src/app/shared/*` |
| `@features/*` | `src/app/features/*` |
| `@layout/*` | `src/app/layout/*` |
| `@models` | `src/app/core/models` |
| `@constants` | `src/app/constants` |
| `@environments/*` | `src/environments/*` |
