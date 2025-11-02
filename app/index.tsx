import { Text } from '@/components/ui/text';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect ke home setelah 1 detik (atau langsung)
    const timer = setTimeout(() => {
      router.replace('/(tabs)/home');
    }, 100); // Hapus delay ini jika mau langsung redirect

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-background">
      <Text className="font-bold text-3xl text-blue-700 mb-4">
        RN Boilerplate
      </Text>
      <ActivityIndicator size="large" color="#3b82f6" />
    </View>
  );
}
