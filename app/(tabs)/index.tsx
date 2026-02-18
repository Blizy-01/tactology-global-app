import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MoreHorizontal, ChevronDown } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { cssInterop } from 'nativewind';
import { ShiftCard } from '@/components/ui/ShiftCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { LoadingSkeleton, ErrorState } from '@/components/ui/LoadingStates';
import { useShifts } from '@/hooks/useShifts';

cssInterop(MoreHorizontal, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(ChevronDown, { className: { target: 'style', nativeStyleToProp: { color: true } } });

const TIME_SLOTS = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00'];

export default function ScheduleScreen() {
  const router = useRouter();
  const { shifts, calendarDays, isLoading, error, selectedDate, setSelectedDate, refetch } = useShifts();

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-row items-center justify-between px-6 pt-2 pb-4">
        <Text className="text-2xl font-bold text-foreground">Mijn rooster</Text>
        <View className="flex-row items-center gap-3">
          <ThemeToggle />
          <Pressable className="p-2 rounded-full active:bg-accent" hitSlop={8}>
            <MoreHorizontal className="text-foreground" size={24} />
          </Pressable>
        </View>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 128 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mb-6">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
          >
            {calendarDays.map((day, index) => (
              <Pressable
                key={`${day.date}-${index}`}
                onPress={() => setSelectedDate(day.date)}
                className={`items-center justify-center w-14 h-20 rounded-2xl ${day.date === selectedDate
                    ? 'bg-primary shadow-lg shadow-primary/25'
                    : 'bg-card border border-border'
                  }`}
                style={{ marginRight: 8 }}
              >
                <Text
                  className={`text-xs font-medium mb-1 ${day.date === selectedDate ? 'text-primary-foreground' : 'text-muted-foreground'
                    }`}
                >
                  {day.dayName}
                </Text>
                <Text
                  className={`text-lg font-bold ${day.date === selectedDate ? 'text-primary-foreground' : 'text-foreground'
                    }`}
                >
                  {day.date}
                </Text>
                {day.isToday && (
                  <View
                    className={`w-1 h-1 rounded-full mt-1 ${day.date === selectedDate ? 'bg-primary-foreground' : 'bg-primary'
                      }`}
                  />
                )}
              </Pressable>
            ))}
          </ScrollView>
        </View>

        <View className="px-6 mb-4">
          <Pressable className="flex-row items-center justify-between bg-card border border-border rounded-xl px-4 py-3 active:bg-accent">
            <Text className="text-foreground font-semibold">Room1</Text>
            <ChevronDown className="text-muted-foreground" size={20} />
          </Pressable>
        </View>

        <View className="px-6">
          {error ? (
            <ErrorState message={error} onRetry={refetch} />
          ) : (
            <View className="flex-row">
              <View className="w-16 pt-2">
                {TIME_SLOTS.map((time) => (
                  <View key={time} className="h-20 justify-start">
                    <Text className="text-xs text-muted-foreground font-medium">{time}</Text>
                  </View>
                ))}
              </View>

              <View className="flex-1 relative">
                <View
                  className="absolute left-0 right-0 flex-row items-center z-10"
                  style={{ top: 120 }}
                >
                  <View className="w-2 h-2 rounded-full bg-primary" />
                  <View className="flex-1 h-px bg-primary" />
                </View>

                {isLoading ? (
                  <LoadingSkeleton count={4} />
                ) : shifts.length === 0 ? (
                  <EmptyState
                    icon="📅"
                    title="No shifts today"
                    subtitle="You have no shifts scheduled for this day."
                  />
                ) : (
                  <View className="gap-3">
                    {shifts.map((shift) => (
                      <ShiftCard
                        key={shift.id}
                        shift={shift}
                        onPress={() => router.push('/shift-details')}
                      />
                    ))}
                  </View>
                )}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}