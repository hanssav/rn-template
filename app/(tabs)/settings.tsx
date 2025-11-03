import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ScreenWrapper from '@/components/ui/screen-wrapper';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { useTheme } from '@/lib/theme-provider';
import { useState } from 'react';
import { useColorScheme, View } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const { theme, setTheme } = useTheme();
  const systemColorScheme = useColorScheme();

  const toggleTheme = () => {
    // Jika system, ambil actual theme yang sedang aktif
    const currentEffectiveTheme =
      theme === 'system' ? systemColorScheme || 'light' : theme;

    // Toggle berdasarkan effective theme
    setTheme(currentEffectiveTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ScreenWrapper>
      <View className="p-6 gap-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>Manage your account settings</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Button variant="outline">
              <Text>Change Password</Text>
            </Button>
            <Button variant="outline">
              <Text>Update Email</Text>
            </Button>
            <Button variant="outline">
              <Text>Privacy Settings</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Preferences */}
        <Card>
          <CardHeader>
            <CardTitle>Preferences</CardTitle>
            <CardDescription>Customize your experience</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="font-medium">Push Notifications</Text>
                <Text className="text-sm text-muted-foreground">
                  Receive notifications about updates
                </Text>
              </View>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
                id="push-notifications"
                nativeID="push-notifications"
              />
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="font-medium">Theme</Text>
                <Text className="text-sm text-muted-foreground">
                  {theme === 'system'
                    ? 'Using system theme'
                    : theme === 'dark'
                    ? 'Dark theme enabled'
                    : 'Light theme enabled'}
                </Text>
              </View>
              <Switch
                checked={
                  theme === 'dark' ||
                  (theme === 'system' && systemColorScheme === 'dark')
                }
                onCheckedChange={toggleTheme}
                id="dark-mode"
                nativeID="dark-mode"
              />
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="font-medium">Auto-play Videos</Text>
                <Text className="text-sm text-muted-foreground">
                  Automatically play videos in feed
                </Text>
              </View>
              <Switch
                checked={autoPlay}
                onCheckedChange={setAutoPlay}
                id="play-mode"
                nativeID="play-mode"
              />
            </View>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent className="gap-3">
            <Button variant="ghost">
              <Text>Terms of Service</Text>
            </Button>
            <Button variant="ghost">
              <Text>Privacy Policy</Text>
            </Button>
            <Button variant="ghost">
              <Text>Help & Support</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card>
          <CardHeader>
            <CardTitle>Danger Zone</CardTitle>
            <CardDescription>Irreversible actions</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Button variant="destructive">
              <Text>Log Out</Text>
            </Button>
            <Button variant="outline">
              <Text>Delete Account</Text>
            </Button>
          </CardContent>
        </Card>

        <View className="h-8" />
      </View>
    </ScreenWrapper>
  );
}
