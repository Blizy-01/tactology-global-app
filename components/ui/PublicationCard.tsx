import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Clock } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import { Badge } from './Badge';
import type { Publication } from '@/types/publication';

cssInterop(Clock, { className: { target: 'style', nativeStyleToProp: { color: true } } });

interface PublicationCardProps {
    publication: Publication;
    onPress?: () => void;
}

export function PublicationCard({ publication, onPress }: PublicationCardProps) {
    return (
        <Pressable
            onPress={onPress}
            className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm active:scale-[0.98]"
        >
            <Image
                source={{ uri: publication.coverImage }}
                className="w-full h-48"
                resizeMode="cover"
            />

            <View className="p-4">
                <View className="flex-row gap-2 mb-3">
                    <Badge label={publication.category} variant="primary" />
                    {publication.secondaryCategory && (
                        <Badge label={publication.secondaryCategory} variant="amber" />
                    )}
                </View>

                <Text className="text-lg font-bold text-foreground mb-2 leading-tight">
                    {publication.title}
                </Text>

                <Text className="text-muted-foreground text-sm mb-4 leading-relaxed" numberOfLines={2}>
                    {publication.description}
                </Text>

                <View className="flex-row items-center justify-between pt-3 border-t border-border">
                    <View className="flex-row items-center gap-2">
                        <Image source={{ uri: publication.authorAvatar }} className="w-8 h-8 rounded-full" />
                        <View>
                            <Text className="text-sm font-semibold text-foreground">{publication.author}</Text>
                            <Text className="text-xs text-muted-foreground">{publication.date}</Text>
                        </View>
                    </View>

                    <View className="flex-row items-center gap-1">
                        <Clock className="text-muted-foreground" size={14} />
                        <Text className="text-xs text-muted-foreground">{publication.readTime}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}
