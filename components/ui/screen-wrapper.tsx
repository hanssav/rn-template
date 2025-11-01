import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ScrollView, View } from 'react-native';

type ScreenWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function ScreenWrapper({
  children,
  className,
}: ScreenWrapperProps) {
  return (
    <ScrollView className="flex-1 bg-background">
      <View className={cn('flex-1 pt-8 ', className)}>{children}</View>
    </ScrollView>
  );
}
