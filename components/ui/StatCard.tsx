import React from 'react';
import { View, Text } from 'react-native';
import { Calendar, Clock, TrendingUp } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

cssInterop(Calendar, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Clock, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(TrendingUp, { className: { target: 'style', nativeStyleToProp: { color: true } } });

export type StatIconName = 'calendar' | 'clock' | 'trending-up';

interface StatCardProps {
    iconName: StatIconName;
    value: string;
    sub: string;
    label: string;
    iconClassName: string;
}

const ICON_MAP: Record<StatIconName, React.ElementType> = {
    'calendar': Calendar,
    'clock': Clock,
    'trending-up': TrendingUp,
};

export function StatCard({ iconName, value, sub, label, iconClassName }: StatCardProps) {
    const Icon = ICON_MAP[iconName];

    return (
        <View className="flex-1 bg-card border border-border rounded-xl p-3 items-center">
            <Icon className={iconClassName} size={18} />
            <Text className="text-foreground font-bold text-lg mt-1">{value}</Text>
            <Text className="text-muted-foreground text-xs">{sub}</Text>
            <Text className="text-muted-foreground text-xs mt-0.5">{label}</Text>
        </View>
    );
}
