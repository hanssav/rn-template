import { useTheme } from '@/lib/theme-provider';
import { Tabs } from 'expo-router';
import { Home, Settings, TestTube, User } from 'lucide-react-native';
import { colorScheme } from 'nativewind';
import { Platform } from 'react-native';

export default function TabLayout() {
  const { theme } = useTheme();
  const isDark =
    theme === 'dark' || (theme === 'system' && colorScheme.get() === 'dark');

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: isDark ? '#60a5fa' : '#3b82f6',
        tabBarInactiveTintColor: isDark ? '#52525B' : '#9ca3af',
        tabBarStyle: {
          backgroundColor: isDark ? '#13131A' : '#ffffff',
          borderTopWidth: 1,
          borderTopColor: isDark ? '#1F1F2C' : '#e5e7eb',
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
          backgroundColor: isDark ? '#1f2937' : '#ffffff',
        },
        headerTintColor: isDark ? '#f9fafb' : '#1f2937',
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
