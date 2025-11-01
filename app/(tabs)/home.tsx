import { Badge } from '@/components/ui/badge';
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
import { useRouter } from 'expo-router';
import { View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScreenWrapper>
      <View className="p-6 gap-6">
        {/* Welcome Section */}
        <View className="py-4">
          <Text className="text-3xl font-bold">Welcome Back! 👋</Text>
          <Text className="text-muted-foreground mt-2">
            Here's what's happening today
          </Text>
        </View>

        {/* Quick Stats */}
        <View className="flex-row gap-4">
          <Card className="flex-1">
            <CardContent className="pt-6">
              <Text className="text-2xl font-bold">24</Text>
              <Text className="text-muted-foreground text-sm">Projects</Text>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="pt-6">
              <Text className="text-2xl font-bold">8</Text>
              <Text className="text-muted-foreground text-sm">Tasks</Text>
            </CardContent>
          </Card>
        </View>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <View className="flex-row justify-between items-center">
              <CardTitle>Recent Activity</CardTitle>
              <Badge variant="secondary">
                <Text>New</Text>
              </Badge>
            </View>
          </CardHeader>
          <CardContent className="gap-3">
            <View className="py-2">
              <Text className="font-medium">Project Updated</Text>
              <Text className="text-sm text-muted-foreground">2 hours ago</Text>
            </View>
            <View className="py-2">
              <Text className="font-medium">Task Completed</Text>
              <Text className="text-sm text-muted-foreground">5 hours ago</Text>
            </View>
            <View className="py-2">
              <Text className="font-medium">New Message</Text>
              <Text className="text-sm text-muted-foreground">1 day ago</Text>
            </View>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Button onPress={() => router.push('/(tabs)/test')}>
              <Text>View Components</Text>
            </Button>
            <Button
              variant="outline"
              onPress={() => router.push('/(tabs)/profile')}
            >
              <Text>Go to Profile</Text>
            </Button>
            <Button
              variant="ghost"
              onPress={() => router.push('/(tabs)/settings')}
            >
              <Text>Open Settings</Text>
            </Button>
          </CardContent>
        </Card>

        <View className="h-8" />
      </View>
    </ScreenWrapper>
  );
}
