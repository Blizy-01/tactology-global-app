import React from 'react';
import { View, Text } from 'react-native';

interface EmptyStateProps {
    icon?: string;
    title: string;
    subtitle?: string;
}

export function EmptyState({ icon = '📭', title, subtitle }: EmptyStateProps) {
    return (
        <View className="flex-1 items-center justify-center py-16 px-8">
            <Text className="text-5xl mb-4">{icon}</Text>
            <Text className="text-foreground font-bold text-lg text-center mb-2">{title}</Text>
            {subtitle && (
                <Text className="text-muted-foreground text-sm text-center leading-relaxed">{subtitle}</Text>
            )}
        </View>
    );
}
