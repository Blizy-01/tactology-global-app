import React from 'react';
import { View, Text } from 'react-native';

interface LoadingSkeletonProps {
    count?: number;
}

function SkeletonBlock({ className }: { className: string }) {
    return <View className={`bg-muted/60 rounded-lg animate-pulse ${className}`} />;
}

export function ShiftCardSkeleton() {
    return (
        <View className="bg-card rounded-xl border border-border overflow-hidden flex-row">
            <View className="w-1 bg-muted/60" />
            <View className="flex-1 p-4 gap-2">
                <View className="flex-row justify-between">
                    <SkeletonBlock className="h-4 w-32" />
                    <SkeletonBlock className="h-4 w-20" />
                </View>
                <View className="flex-row items-center gap-2 mt-1">
                    <SkeletonBlock className="w-6 h-6 rounded-full" />
                    <SkeletonBlock className="h-3 w-24" />
                </View>
            </View>
        </View>
    );
}

export function PublicationCardSkeleton() {
    return (
        <View className="bg-card rounded-2xl border border-border overflow-hidden">
            <SkeletonBlock className="w-full h-48 rounded-none" />
            <View className="p-4 gap-3">
                <SkeletonBlock className="h-5 w-3/4" />
                <SkeletonBlock className="h-4 w-full" />
                <SkeletonBlock className="h-4 w-2/3" />
            </View>
        </View>
    );
}

export function LoadingSkeleton({ count = 3 }: LoadingSkeletonProps) {
    return (
        <View className="gap-3">
            {Array.from({ length: count }).map((_, i) => (
                <ShiftCardSkeleton key={i} />
            ))}
        </View>
    );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
    return (
        <View className="flex-1 items-center justify-center py-16 px-8">
            <Text className="text-4xl mb-4">⚠️</Text>
            <Text className="text-foreground font-bold text-base text-center mb-2">Something went wrong</Text>
            <Text className="text-muted-foreground text-sm text-center mb-4">{message}</Text>
            {onRetry && (
                <Text className="text-primary font-semibold text-sm" onPress={onRetry}>
                    Try again
                </Text>
            )}
        </View>
    );
}
