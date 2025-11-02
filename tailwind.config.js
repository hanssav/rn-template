/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#ffffff',
          dark: '#09090b',
        },
        foreground: {
          DEFAULT: '#09090b',
          dark: '#ffffff',
        },
        primary: {
          DEFAULT: '#18181b',
          dark: '#ffffff',
        },
        'primary-foreground': {
          DEFAULT: '#ffffff',
          dark: '#18181b',
        },
        secondary: {
          DEFAULT: '#f4f4f5',
          dark: '#27272a',
        },
        'secondary-foreground': {
          DEFAULT: '#18181b',
          dark: '#ffffff',
        },
        muted: {
          DEFAULT: '#f4f4f5',
          dark: '#27272a',
        },
        'muted-foreground': {
          DEFAULT: '#71717a',
          dark: '#a1a1aa',
        },
        accent: {
          DEFAULT: '#f4f4f5',
          dark: '#27272a',
        },
        'accent-foreground': {
          DEFAULT: '#18181b',
          dark: '#ffffff',
        },
        destructive: {
          DEFAULT: '#ef4444',
          dark: '#7f1d1d',
        },
        'destructive-foreground': {
          DEFAULT: '#ffffff',
          dark: '#ffffff',
        },
        border: {
          DEFAULT: '#e4e4e7',
          dark: '#27272a',
        },
        input: {
          DEFAULT: '#e4e4e7',
          dark: '#27272a',
        },
        ring: {
          DEFAULT: '#18181b',
          dark: '#d4d4d8',
        },
        card: {
          DEFAULT: '#ffffff',
          dark: '#13131A',
          border: '#F3F4F6',
          'border-dark': '#1F1F2C',
        },
        dialog: {
          DEFAULT: '#ffffff',
          dark: '#13131A',
          border: '#e5e7eb',
          'border-dark': '#1F1F2C',
          overlay: '#000000',
        },
        input: {
          DEFAULT: '#ffffff',
          dark: '#13131A',
          border: '#e5e7eb',
          'border-dark': '#1F1F2C',
          text: '#374151',
          'text-dark': '#f3f4f6',
          placeholder: '#6b7280',
          'placeholder-dark': '#9ca3af',
        },
        'card-foreground': {
          DEFAULT: '#09090b',
          dark: '#ffffff',
        },
        popover: {
          DEFAULT: '#ffffff',
          dark: '#09090b',
        },
        'popover-foreground': {
          DEFAULT: '#09090b',
          dark: '#ffffff',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [],
};
