import { Button } from '@/components/ui/button';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center gap-4">
      <Text className="font-bold text-3xl text-blue-700">
        Welcome in NativeWind!
      </Text>
      <Button onPress={() => alert('Button Pressed!')}>
        <Text className="text-white">Click Me</Text>
      </Button>

      <Button onPress={() => router.push('/test')}>
        <Text className="text-white">View Component Tests</Text>
      </Button>
    </View>
  );
}
