import { TextClassContext } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import * as Slot from '@rn-primitives/slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { Platform, View, ViewProps } from 'react-native';

const badgeVariants = cva(
  cn(
    'border-gray-200 dark:border-gray-700 group shrink-0 flex-row items-center justify-center gap-1 overflow-hidden rounded-md border px-2 py-0.5',
    Platform.select({
      web: 'focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive w-fit whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] [&>svg]:pointer-events-none [&>svg]:size-3',
    }),
  ),
  {
    variants: {
      variant: {
        default: cn(
          'bg-blue-600 dark:bg-blue-500 border-transparent',
          Platform.select({
            web: '[a&]:hover:bg-blue-700 dark:hover:bg-blue-600',
          }),
        ),
        secondary: cn(
          'bg-gray-100 dark:bg-gray-800 border-transparent',
          Platform.select({
            web: '[a&]:hover:bg-gray-200 dark:hover:bg-gray-700',
          }),
        ),
        destructive: cn(
          'bg-red-600 dark:bg-red-500 border-transparent',
          Platform.select({
            web: '[a&]:hover:bg-red-700 dark:hover:bg-red-600',
          }),
        ),
        outline: Platform.select({
          web: '[a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        }),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const badgeTextVariants = cva('text-xs font-medium', {
  variants: {
    variant: {
      default: 'text-white dark:text-white',
      secondary: 'text-gray-700 dark:text-gray-100',
      destructive: 'text-white dark:text-white',
      outline: 'text-gray-700 dark:text-gray-100',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = ViewProps &
  React.RefAttributes<View> & {
    asChild?: boolean;
  } & VariantProps<typeof badgeVariants>;

function Badge({ className, variant, asChild, ...props }: BadgeProps) {
  const Component = asChild ? Slot.View : View;
  return (
    <TextClassContext.Provider value={badgeTextVariants({ variant })}>
      <Component
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    </TextClassContext.Provider>
  );
}

export { Badge, badgeTextVariants, badgeVariants };
export type { BadgeProps };
