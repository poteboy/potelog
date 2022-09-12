// https://tailwindcss.com/docs/customizing-colors

export const colors = {
  Slate: {
    50: '#f8fafc',
  },
  Gray: {
    500: '#6b7280',
    800: '#1f2937',
    900: '#111827',
  },
  // main color
  Indigo: {
    50: '#eef2ff',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    800: '#3730a3',
    900: '#312e81',
  },
  Violet: {
    100: '#e3e3ff', //　カスタム色、アイコンの背景色
    300: '#c4b5fd',
    400: '#a78bfa',
    500: '#a855f7',
  },
  Pink: {
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
  },
};

export const semanticColors = {
  accent: colors.Indigo[800],
  main: colors.Indigo[500],
  faint: colors.Violet[100],
  link: colors.Pink[600],
  title: colors.Pink[700],
};
