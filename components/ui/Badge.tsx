import React from 'react';
import { View, Text } from 'react-native';

interface BadgeProps {
    label: string;
    variant?: 'primary' | 'amber' | 'blue' | 'rose' | 'emerald';
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    primary: 'bg-primary/10',
    amber: 'bg-amber-100 dark:bg-amber-900/40',
    blue: 'bg-blue-100 dark:bg-blue-900/40',
    rose: 'bg-rose-100 dark:bg-rose-900/40',
    emerald: 'bg-emerald-100 dark:bg-emerald-900/40',
};

const textClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
    primary: 'text-primary',
    amber: 'text-amber-700 dark:text-amber-300',
    blue: 'text-blue-700 dark:text-blue-300',
    rose: 'text-rose-700 dark:text-rose-300',
    emerald: 'text-emerald-700 dark:text-emerald-300',
};

export function Badge({ label, variant = 'primary' }: BadgeProps) {
    return (
        <View className={`self-start px-3 py-1 rounded-full ${variantClasses[variant]}`}>
            <Text className={`text-xs font-semibold ${textClasses[variant]}`}>{label}</Text>
        </View>
    );
}
