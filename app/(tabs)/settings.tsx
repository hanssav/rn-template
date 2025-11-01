import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import ScreenWrapper from '@/components/ui/screen-wrapper';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { Switch, View } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

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
              <Switch value={notifications} onValueChange={setNotifications} />
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="font-medium">Dark Mode</Text>
                <Text className="text-sm text-muted-foreground">
                  Enable dark theme
                </Text>
              </View>
              <Switch value={darkMode} onValueChange={setDarkMode} />
            </View>

            <View className="flex-row justify-between items-center">
              <View className="flex-1">
                <Text className="font-medium">Auto-play Videos</Text>
                <Text className="text-sm text-muted-foreground">
                  Automatically play videos in feed
                </Text>
              </View>
              <Switch value={autoPlay} onValueChange={setAutoPlay} />
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
              <Text className="text-destructive">Delete Account</Text>
            </Button>
          </CardContent>
        </Card>

        <View className="h-8" />
      </View>
    </ScreenWrapper>
  );
}
