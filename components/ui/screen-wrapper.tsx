import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function ScreenWrapper({
  children,
  className,
}: ScreenWrapperProps) {
  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-[#0A0A0F]">
      <ScrollView className="flex-1">
        <ScrollView className={cn('flex-1', className)}>{children}</ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
