import { ThemeProvider } from '@/lib/theme-provider';
import { PortalHost } from '@rn-primitives/portal';
import { Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './globals.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider defaultTheme="system">
        <Slot />
        <PortalHost />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
