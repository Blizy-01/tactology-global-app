import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { User as UserIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import type { Shift, ShiftColor } from '@/types/shift';

cssInterop(UserIcon, { className: { target: 'style', nativeStyleToProp: { color: true } } });

interface ShiftCardProps {
    shift: Shift;
    onPress: () => void;
}

const accentColors: Record<ShiftColor, string> = {
    blue: '#3B82F6',
    amber: '#F59E0B',
    rose: '#F43F5E',
};

const timeTextColors: Record<ShiftColor, string> = {
    blue: 'text-blue-600 dark:text-blue-400',
    amber: 'text-amber-600 dark:text-amber-400',
    rose: 'text-rose-600 dark:text-rose-400',
};

export function ShiftCard({ shift, onPress }: ShiftCardProps) {
    return (
        <Pressable
            onPress={onPress}
            className="bg-card rounded-xl border border-border overflow-hidden active:opacity-80"
            style={{ flexDirection: 'row' }}
        >
            <View
                style={{
                    width: 4,
                    backgroundColor: accentColors[shift.color],
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 12,
                }}
            />
            <View className="flex-1 p-4">
                <View className="flex-row justify-between items-start mb-2">
                    <Text className="font-bold text-foreground text-sm flex-1 mr-2" numberOfLines={1}>
                        {shift.title}
                    </Text>
                    <Text className={`text-xs font-semibold ${timeTextColors[shift.color]}`}>
                        {shift.timeDisplay}
                    </Text>
                </View>
                <View className="flex-row items-center gap-2">
                    <View className="w-6 h-6 rounded-full bg-primary/20 items-center justify-center">
                        <UserIcon className="text-primary" size={14} />
                    </View>
                    <Text className="text-sm text-foreground font-medium">{shift.staffName}</Text>
                    <Text className="text-xs text-muted-foreground">• {shift.status}</Text>
                </View>
            </View>
        </Pressable>
    );
}
