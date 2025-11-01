import { cn } from '@/lib/cn';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

const buttonVariants = cva('rounded-xl items-center justify-center', {
  variants: {
    variant: {
      primary: 'bg-blue-600',
      secondary: 'bg-gray-300',
      outline: 'border border-gray-400 bg-transparent',
    },
    size: {
      sm: 'px-3 py-2',
      md: 'px-4 py-3',
      lg: 'px-5 py-4',
    },
    radius: {
      sm: 'rounded-md',
      md: 'rounded-xl',
      full: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
    radius: 'md',
  },
});

const buttonTextVariants = cva('font-semibold text-base', {
  variants: {
    variant: {
      primary: 'text-white',
      secondary: 'text-gray-800',
      outline: 'text-blue-600',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type ButtonCvaProps = VariantProps<typeof buttonVariants>;

export type ButtonProps = TouchableOpacityProps &
  ButtonCvaProps & {
    children?: React.ReactNode;
    className?: string;
    textClassName?: string;
  };

// Forward ref to allow parent components to access the TouchableOpacity ref.
export const Button = React.forwardRef<
  React.ElementRef<typeof TouchableOpacity>,
  ButtonProps
>(
  (
    { children, variant, size, radius, className, textClassName, ...props },
    ref,
  ) => {
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.8}
        className={cn(buttonVariants({ variant, size, radius }), className)}
        {...props}
      >
        {children ? (
          // If children provided, render as-is but apply text variant merge when child is a string
          typeof children === 'string' ? (
            <Text
              className={cn(buttonTextVariants({ variant }), textClassName)}
            >
              {children}
            </Text>
          ) : (
            // If children is a React element, still wrap it in a Text when it's a plain string child,
            // otherwise render children directly so consumers can pass complex content.
            <>
              {React.Children.map(children, (child) =>
                typeof child === 'string' ? (
                  <Text
                    className={cn(
                      buttonTextVariants({ variant }),
                      textClassName,
                    )}
                  >
                    {child}
                  </Text>
                ) : (
                  child
                ),
              )}
            </>
          )
        ) : null}
      </TouchableOpacity>
    );
  },
);

Button.displayName = 'Button';
