import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

export default function TestScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="p-6 gap-6">
        {/* Header */}
        <View className="items-center py-4">
          <Text className="text-3xl font-bold text-foreground">
            Component Showcase
          </Text>
          <Text className="text-muted-foreground mt-2">
            Testing React Native Reusables
          </Text>
        </View>

        {/* Avatar Section */}
        <Card>
          <CardHeader>
            <CardTitle>Avatar Component</CardTitle>
            <CardDescription>
              Display user avatars with fallback
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex-row gap-4 items-center">
              <Avatar alt="User avatar" className="w-16 h-16">
                <AvatarImage
                  source={{ uri: 'https://github.com/shadcn.png' }}
                />
                <AvatarFallback>
                  <Text>JD</Text>
                </AvatarFallback>
              </Avatar>

              <Avatar alt="User avatar" className="w-16 h-16">
                <AvatarFallback>
                  <Text className="text-lg font-bold">AB</Text>
                </AvatarFallback>
              </Avatar>

              <Avatar alt="User avatar" className="w-16 h-16">
                <AvatarImage
                  source={{
                    uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=Felix',
                  }}
                />
                <AvatarFallback>
                  <Text>FX</Text>
                </AvatarFallback>
              </Avatar>
            </View>
          </CardContent>
        </Card>

        {/* Badge Section */}
        <Card>
          <CardHeader>
            <CardTitle>Badge Component</CardTitle>
            <CardDescription>Status indicators and labels</CardDescription>
          </CardHeader>
          <CardContent>
            <View className="flex-row flex-wrap gap-3">
              <Badge>
                <Text>Default</Text>
              </Badge>
              <Badge variant="secondary">
                <Text>Secondary</Text>
              </Badge>
              <Badge variant="destructive">
                <Text>Destructive</Text>
              </Badge>
              <Badge variant="outline">
                <Text>Outline</Text>
              </Badge>
            </View>
          </CardContent>
        </Card>

        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle>Input Component</CardTitle>
            <CardDescription>Text input fields with labels</CardDescription>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="gap-2">
              <Text className="text-sm font-medium">Name</Text>
              <Input
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
                className="native:h-12"
              />
            </View>

            <View className="gap-2">
              <Text className="text-sm font-medium">Email</Text>
              <Input
                placeholder="your.email@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                className="native:h-12"
              />
            </View>

            <View className="gap-2">
              <Text className="text-sm font-medium">Password</Text>
              <Input
                placeholder="Enter password"
                secureTextEntry
                className="native:h-12"
              />
            </View>
          </CardContent>
        </Card>

        {/* Button Section */}
        <Card>
          <CardHeader>
            <CardTitle>Button Component</CardTitle>
            <CardDescription>Different button variants</CardDescription>
          </CardHeader>
          <CardContent className="gap-3">
            <Button onPress={() => Alert.alert('Pressed!', 'Default button')}>
              <Text>Default Button</Text>
            </Button>

            <Button
              variant="secondary"
              onPress={() => Alert.alert('Secondary!')}
            >
              <Text>Secondary Button</Text>
            </Button>

            <Button
              variant="destructive"
              onPress={() => Alert.alert('Destructive!')}
            >
              <Text>Destructive Button</Text>
            </Button>

            <Button variant="outline" onPress={() => Alert.alert('Outline!')}>
              <Text>Outline Button</Text>
            </Button>

            <Button variant="ghost" onPress={() => Alert.alert('Ghost!')}>
              <Text>Ghost Button</Text>
            </Button>

            <Button disabled>
              <Text>Disabled Button</Text>
            </Button>
          </CardContent>
        </Card>

        {/* Dialog Section */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog Component</CardTitle>
            <CardDescription>Modal dialogs and confirmations</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Text>Open Dialog</Text>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-11/12">
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to continue? This action cannot be
                    undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="flex-row gap-3 justify-end">
                  <Button variant="outline" onPress={() => {}}>
                    <Text>Cancel</Text>
                  </Button>
                  <Button onPress={() => Alert.alert('Confirmed!')}>
                    <Text>Continue</Text>
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Combined Example */}
        <Card>
          <CardHeader>
            <View className="flex-row items-center justify-between">
              <View className="flex-1">
                <CardTitle>User Profile</CardTitle>
                <CardDescription>Combined components example</CardDescription>
              </View>
              <Badge variant="secondary">
                <Text>Active</Text>
              </Badge>
            </View>
          </CardHeader>
          <CardContent className="gap-4">
            <View className="flex-row items-center gap-4">
              <Avatar alt="Profile" className="w-20 h-20">
                <AvatarImage
                  source={{
                    uri: 'https://api.dicebear.com/7.x/avataaars/png?seed=John',
                  }}
                />
                <AvatarFallback>
                  <Text className="text-xl">JD</Text>
                </AvatarFallback>
              </Avatar>
              <View className="flex-1">
                <Text className="text-lg font-semibold">John Doe</Text>
                <Text className="text-muted-foreground">
                  john.doe@example.com
                </Text>
              </View>
            </View>

            <Button variant="outline" className="w-full">
              <Text>Edit Profile</Text>
            </Button>
          </CardContent>
        </Card>

        <View className="h-8" />
      </View>
    </ScrollView>
  );
}
