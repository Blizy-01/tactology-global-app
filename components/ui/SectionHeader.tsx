import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

cssInterop(ChevronRight, { className: { target: 'style', nativeStyleToProp: { color: true } } });

interface SectionHeaderProps {
    title: string;
    onSeeAll?: () => void;
}

export function SectionHeader({ title, onSeeAll }: SectionHeaderProps) {
    return (
        <View className="flex-row items-center justify-between mb-3">
            <Text className="text-foreground font-bold text-lg">{title}</Text>
            {onSeeAll && (
                <Pressable className="flex-row items-center gap-1 active:opacity-70" onPress={onSeeAll}>
                    <Text className="text-primary text-sm font-medium">See all</Text>
                    <ChevronRight className="text-primary" size={16} />
                </Pressable>
            )}
        </View>
    );
}
