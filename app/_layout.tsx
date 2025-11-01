import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import './globals.css';

export default function RootLayout() {
  return (
    <>
      <Stack />
      <PortalHost />
    </>
  );
}
