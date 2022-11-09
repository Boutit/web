export const baseAliases = {
  elevation1: 'rgba(var(--elevation), 0.2)',
  elevation2: 'rgba(var(--elevation), 0.6)',
  line: 'rgba(var(--grey))',
  primary: 'rgba(var(--primary))',
  secondary: 'rgba(var(--secondary))',
} as const;

export const backgroundAliases = {
  filler: 'rgba(var(--grey))',
  light: 'rgba(var(--background))',
  negative: 'rgba(var(--negative))',
  positive: 'rgba(var(--positive))',
  primary: 'rgba(var(--primary))',
  secondary: 'rgba(var(--secondary))',
  backgroundOverlay: 'rgba(var(--background-overlay), 0.5)',
} as const;

export const foregroundAliases = {
  foreground: 'rgba(var(--foreground))',
  'foreground-strong': 'rgba(var(--foreground-strong))',
  primary: 'rgba(var(--primary))',
} as const;
