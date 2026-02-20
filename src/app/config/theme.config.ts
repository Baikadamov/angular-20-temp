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
    { label: '\u0413\u043b\u0430\u0432\u043d\u0430\u044f', path: '/', icon: 'LayoutDashboard' },
  ],
} as const;
