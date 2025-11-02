import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScreenWrapper from '@/components/ui/screen-wrapper';
import { Text } from '@/components/ui/text';
import { View } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScreenWrapper>
      <View className="p-6 gap-6">
        {/* Profile Header */}
        <Card>
          <CardContent className="items-center pt-6 gap-4">
            <Avatar alt="Profile" className="w-24 h-24">
              <AvatarImage
                source={{
                  uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=Handi',
                }}
              />
              <AvatarFallback>
                <Text className="text-2xl font-bold">HI</Text>
              </AvatarFallback>
            </Avatar>

            <View className="items-center gap-2">
              <Text className="text-2xl font-bold">Handi Irawan</Text>
              <Text className="text-muted-foreground">handi@example.com</Text>
              <Badge>
                <Text>Premium Member</Text>
              </Badge>
            </View>

            <View className="flex-row gap-8 mt-4">
              <View className="items-center">
                <Text className="text-2xl font-bold">24</Text>
                <Text className="text-muted-foreground text-sm">Posts</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold">1.2K</Text>
                <Text className="text-muted-foreground text-sm">Followers</Text>
              </View>
              <View className="items-center">
                <Text className="text-2xl font-bold">384</Text>
                <Text className="text-muted-foreground text-sm">Following</Text>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="gap-3">
            <Button>
              <Text>Edit Profile</Text>
            </Button>
            <Button variant="outline">
              <Text>Share Profile</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Activity Stats</CardTitle>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="flex-row justify-between items-center">
              <Text>Profile Views</Text>
              <Text className="font-bold">892</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text>Post Engagement</Text>
              <Text className="font-bold">4.2K</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text>Average Likes</Text>
              <Text className="font-bold">156</Text>
            </View>
          </CardContent>
        </Card>
      </View>
    </ScreenWrapper>
  );
}
