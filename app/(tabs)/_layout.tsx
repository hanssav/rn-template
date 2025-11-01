import { Tabs } from 'expo-router';
import { Home, Settings, TestTube, User } from 'lucide-react-native';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#3b82f6',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 1,
          borderTopColor: '#e5e7eb',
          height: Platform.OS === 'ios' ? 88 : 60,
          paddingBottom: Platform.OS === 'ios' ? 24 : 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
        headerStyle: {
          backgroundColor: '#ffffff',
        },
        headerTintColor: '#1f2937',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        // Custom tab button with press animation
        // tabBarButton: (props: BottomTabBarButtonProps) => {
        //   return (
        //     <Pressable
        //       {...props}
        //       style={({ pressed }) => [
        //         typeof props.style === 'function'
        //           ? props.style({ pressed })
        //           : props.style,
        //         {
        //           opacity: pressed ? 0.5 : 1,
        //         },
        //       ]}
        //     />
        //   );
        // },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: 'Components',
          tabBarIcon: ({ color, size }) => (
            <TestTube color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Settings color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
