import React from 'react';
import { View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    Bell,
    ChevronRight,
    AlertCircle,
    CheckCircle2,
    Activity,
    Clock,
} from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import { useRouter } from 'expo-router';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { StatCard, type StatIconName } from '@/components/ui/StatCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { useUser } from '@/hooks/useUser';
import { useShifts } from '@/hooks/useShifts';
import { useNotifications } from '@/hooks/useNotifications';
import type { NotificationType } from '@/types/notification';

cssInterop(Bell, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Clock, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(ChevronRight, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(AlertCircle, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(CheckCircle2, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Activity, { className: { target: 'style', nativeStyleToProp: { color: true } } });

const TODAY_SHIFT = {
    title: 'Cardiology Ward',
    time: '08:00 – 16:00',
    room: 'Room 3B',
    status: 'Upcoming',
};

const STATS: { label: string; value: string; sub: string; iconName: StatIconName; colorClass: string }[] = [
    { label: 'This Week', value: '4', sub: 'shifts', iconName: 'calendar', colorClass: 'text-primary' },
    { label: 'Hours Worked', value: '32', sub: 'hrs', iconName: 'clock', colorClass: 'text-emerald-500' },
    { label: 'Completion', value: '98%', sub: 'rate', iconName: 'trending-up', colorClass: 'text-amber-500' },
];

const SHIFT_COLOR_CLASSES: Record<string, string> = {
    blue: 'bg-primary/10 border-primary/30',
    amber: 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800',
};

function getNotificationIcon(type: NotificationType) {
    if (type === 'alert') return <AlertCircle className="text-amber-500" size={20} />;
    if (type === 'success') return <CheckCircle2 className="text-emerald-500" size={20} />;
    return <Activity className="text-primary" size={20} />;
}

function getNotificationBg(type: NotificationType) {
    if (type === 'alert') return 'bg-amber-50 dark:bg-amber-950/30';
    if (type === 'success') return 'bg-emerald-50 dark:bg-emerald-950/30';
    return 'bg-primary/5';
}

export default function HomeScreen() {
    const router = useRouter();
    const { user } = useUser();
    const { upcomingShifts } = useShifts();
    const { notifications, unreadCount } = useNotifications();

    const firstName = user.name.split(' ')[0];
    const lastName = user.name.split(' ')[1];

    return (
        <SafeAreaView className="flex-1 bg-background">
            <ScrollView
                className="flex-1"
                contentContainerStyle={{ paddingBottom: 128 }}
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-row items-center justify-between px-6 pt-4 pb-2">
                    <View>
                        <Text className="text-muted-foreground text-sm">Welcome back 👋</Text>
                        <Text className="text-foreground font-bold text-2xl leading-tight">
                            {firstName} {lastName}
                        </Text>
                    </View>
                    <View className="flex-row items-center gap-3">
                        <Pressable className="relative p-2 rounded-full bg-card border border-border active:bg-accent">
                            <Bell className="text-foreground" size={22} />
                            {unreadCount > 0 && (
                                <View className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-primary" />
                            )}
                        </Pressable>
                        <Image
                            source={{ uri: user.avatar }}
                            className="w-10 h-10 rounded-full border-2 border-primary/30"
                            resizeMode="cover"
                        />
                    </View>
                </View>

                <View className="px-6 mb-1">
                    <Text className="text-muted-foreground text-sm">Start exploring publications</Text>
                </View>

                <View className="mx-6 mt-5 mb-6 bg-primary rounded-2xl p-5 shadow-lg shadow-primary/25">
                    <View className="flex-row items-center justify-between mb-3">
                        <Text className="text-primary-foreground/70 text-sm font-medium">Today's Shift</Text>
                        <View className="bg-white/20 px-2.5 py-1 rounded-full">
                            <Text className="text-primary-foreground text-xs font-semibold">{TODAY_SHIFT.status}</Text>
                        </View>
                    </View>
                    <Text className="text-primary-foreground text-xl font-bold mb-1">{TODAY_SHIFT.title}</Text>
                    <View className="flex-row items-center gap-4 mt-2">
                        <View className="flex-row items-center gap-1.5">
                            <Clock className="text-primary-foreground/70" size={14} />
                            <Text className="text-primary-foreground/90 text-sm">{TODAY_SHIFT.time}</Text>
                        </View>
                        <View className="flex-row items-center gap-1.5">
                            <Activity className="text-primary-foreground/70" size={14} />
                            <Text className="text-primary-foreground/90 text-sm">{TODAY_SHIFT.room}</Text>
                        </View>
                    </View>
                    <Pressable
                        className="mt-4 bg-white/20 rounded-xl py-2.5 items-center active:bg-white/30"
                        onPress={() => router.push('/(tabs)')}
                    >
                        <Text className="text-primary-foreground font-semibold text-sm">View Full Schedule</Text>
                    </Pressable>
                </View>

                <View className="px-6 mb-6">
                    <View className="flex-row gap-3">
                        {STATS.map(({ label, value, sub, iconName, colorClass }) => (
                            <StatCard
                                key={label}
                                iconName={iconName}
                                value={value}
                                sub={sub}
                                label={label}
                                iconClassName={colorClass}
                            />
                        ))}
                    </View>
                </View>

                <View className="px-6 mb-6">
                    <SectionHeader title="Upcoming Shifts" onSeeAll={() => router.push('/(tabs)')} />

                    {upcomingShifts.length === 0 ? (
                        <EmptyState icon="📅" title="No upcoming shifts" subtitle="You have no shifts scheduled." />
                    ) : (
                        <View className="gap-3">
                            {upcomingShifts.map((shift, i) => (
                                <Pressable
                                    key={i}
                                    className={`flex-row items-center rounded-xl border p-4 ${SHIFT_COLOR_CLASSES[shift.color] ?? 'bg-card border-border'} active:opacity-80`}
                                    onPress={() => router.push('/shift-details')}
                                >
                                    <View className="w-12 h-12 rounded-xl bg-primary items-center justify-center mr-4">
                                        <Text className="text-primary-foreground text-xs font-medium">{shift.day}</Text>
                                        <Text className="text-primary-foreground text-base font-bold leading-tight">{shift.date}</Text>
                                    </View>
                                    <View className="flex-1">
                                        <Text className="text-foreground font-semibold text-sm">{shift.room}</Text>
                                        <View className="flex-row items-center gap-1 mt-1">
                                            <Clock className="text-muted-foreground" size={12} />
                                            <Text className="text-muted-foreground text-xs">{shift.time}</Text>
                                        </View>
                                    </View>
                                    <ChevronRight className="text-muted-foreground" size={18} />
                                </Pressable>
                            ))}
                        </View>
                    )}
                </View>

                <View className="px-6">
                    <SectionHeader title="Notifications" />
                    {notifications.length === 0 ? (
                        <EmptyState icon="🔔" title="No notifications" subtitle="You're all caught up!" />
                    ) : (
                        <View className="bg-card border border-border rounded-2xl overflow-hidden">
                            {notifications.map((notif, i) => (
                                <View
                                    key={notif.id}
                                    className={`flex-row items-start p-4 ${i < notifications.length - 1 ? 'border-b border-border' : ''}`}
                                >
                                    <View className={`w-9 h-9 rounded-full ${getNotificationBg(notif.type)} items-center justify-center mr-3 mt-0.5`}>
                                        {getNotificationIcon(notif.type)}
                                    </View>
                                    <View className="flex-1">
                                        <Text className="text-foreground font-semibold text-sm">{notif.title}</Text>
                                        <Text className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{notif.body}</Text>
                                        <Text className="text-muted-foreground text-xs mt-1.5">{notif.time}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
