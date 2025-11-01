import { Button } from '@/components/ui/button';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-bold text-3xl text-blue-700">
        Welcome in NativeWind!
      </Text>
      <Button
        onPress={() => alert('Button Pressed!')}
        // implement cn function if needed/ customize styles
        className="bg-red-500 mt-4"
      >
        Click Me
      </Button>
    </View>
  );
}
