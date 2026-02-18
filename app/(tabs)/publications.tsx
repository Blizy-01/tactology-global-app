import React from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search } from 'lucide-react-native';
import { cssInterop } from 'nativewind';
import { PublicationCard } from '@/components/ui/PublicationCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { PublicationCardSkeleton, ErrorState } from '@/components/ui/LoadingStates';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { usePublications } from '@/hooks/usePublications';
import { useUser } from '@/hooks/useUser';

cssInterop(Search, { className: { target: 'style', nativeStyleToProp: { color: true } } });

export default function PublicationsScreen() {
  const { publications, isLoading, error, refetch } = usePublications();
  const { user } = useUser();

  const firstName = user.name.split(' ')[0];
  const lastName = user.name.split(' ')[1];

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 128 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-6 pt-4 pb-4">
          <View className="flex-row items-center justify-between mb-1">
            <View>
              <Text className="text-muted-foreground text-sm">Welcome back,</Text>
              <Text className="text-2xl font-bold text-foreground">
                {firstName} {lastName}
              </Text>
            </View>
            <View className="w-12 h-12 rounded-full bg-primary/20 items-center justify-center overflow-hidden border-2 border-primary">
              <Text className="text-primary font-bold text-lg">
                {firstName[0]}{lastName[0]}
              </Text>
            </View>
          </View>
          <Text className="text-muted-foreground text-sm mb-5">Start exploring publications</Text>

          <View className="flex-row items-center bg-card border border-border rounded-full px-4 py-3 shadow-sm">
            <Search className="text-muted-foreground mr-3" size={20} />
            <TextInput
              placeholder="Search publications..."
              placeholderTextColor="rgb(148 163 184)"
              className="flex-1 text-base text-foreground"
            />
          </View>
        </View>

        <View className="px-6">
          <SectionHeader title="Latest publications" />

          {error ? (
            <ErrorState message={error} onRetry={refetch} />
          ) : isLoading ? (
            <View className="gap-5">
              {[1, 2].map((i) => (
                <PublicationCardSkeleton key={i} />
              ))}
            </View>
          ) : publications.length === 0 ? (
            <EmptyState
              icon="📰"
              title="No publications yet"
              subtitle="Check back later for the latest medical publications."
            />
          ) : (
            <View className="gap-5">
              {publications.map((item) => (
                <PublicationCard key={item.id} publication={item} />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}