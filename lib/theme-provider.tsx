import { colorScheme } from 'nativewind';
import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type Theme = 'dark' | 'light' | 'system';

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    // Get the effective theme
    const effectiveTheme =
      theme === 'system' ? systemColorScheme || 'light' : theme;

    // Apply the theme
    colorScheme.set(effectiveTheme);

    // Force a re-render by toggling the theme
    const forceUpdate = () => {
      colorScheme.set('light');
      setTimeout(() => {
        colorScheme.set(effectiveTheme);
      }, 0);
    };

    // Force update to ensure theme is applied
    forceUpdate();
  }, [theme, systemColorScheme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
