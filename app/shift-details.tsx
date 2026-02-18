import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { X, Clock, MapPin, Users, Bell, Info } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { cssInterop } from 'nativewind';

cssInterop(X, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Clock, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(MapPin, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Users, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Bell, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Info, { className: { target: 'style', nativeStyleToProp: { color: true } } });

interface TeamMember {
  id: string;
  name: string;
  role: string;
  time: string;
  avatarInitials: string;
}

interface Notice {
  id: string;
  title: string;
  description: string;
  type: 'info' | 'warning' | 'urgent';
}

const shiftData = {
  id: '1',
  title: 'OchtendShift',
  time: '8:00am - 12:00pm',
  date: '10 - 02 - 2024',
  room: 'Kamer',
  service: 'Verkoeverkamte',
  serviceBadge: 'Ochtend 8:00-12:00',
  description:
    'Dit is een kamer voor gesprekken tussen chirurgische artsen en patiënten over behandelplannen en hersteltrajecten.',
  team: [
    { id: '1', name: 'Omar r.', role: 'Elijn a.', time: '4:00 - 8:00', avatarInitials: 'OR' },
    { id: '2', name: 'Omar r.', role: 'Elijn a.', time: '8:00 - 12:00', avatarInitials: 'OR' },
  ] as TeamMember[],
  notices: [
    {
      id: '1',
      title: 'Medewerker is medisch toegewezen',
      description: '2 min geleden',
      type: 'info',
    },
    {
      id: '2',
      title: 'Medewerker is medisch toegewezen',
      description: '2 min geleden',
      type: 'info',
    },
  ] as Notice[],
};

export default function ShiftDetailsScreen() {
  const router = useRouter();

  const getNoticeColor = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800';
      case 'urgent':
        return 'bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800';
      default:
        return 'bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800';
    }
  };

  const getNoticeIconColor = (type: string) => {
    switch (type) {
      case 'warning': return 'text-amber-600 dark:text-amber-400';
      case 'urgent': return 'text-rose-600 dark:text-rose-400';
      default: return 'text-blue-600 dark:text-blue-400';
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['bottom']}>
      <View className="items-center pt-3 pb-2">
        <View className="w-12 h-1.5 bg-muted-foreground/30 rounded-full" />
      </View>

      <View className="flex-row items-center justify-between px-6 py-4 border-b border-border">
        <Text className="text-xl font-bold text-foreground">Shift Details</Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="p-2 rounded-full bg-muted/50 active:bg-muted"
        >
          <X className="text-foreground" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={['#4F46E5', '#6366F1']}
          style={{
            paddingVertical: 32,
            paddingHorizontal: 24,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
          }}
        >
          <View className="flex-row items-center gap-2 mb-2">
            <Clock color="#fff" size={18} />
            <Text className="text-white/80 text-sm font-medium">{shiftData.date}</Text>
          </View>
          <Text className="text-3xl font-bold text-white mb-1">{shiftData.time}</Text>
          <Text className="text-lg text-white/90 font-medium">{shiftData.title}</Text>
        </LinearGradient>

        <View className="px-6 mt-6">
          <Text className="text-base font-semibold text-foreground mb-3">Beschrijving</Text>
          <Text className="text-muted-foreground leading-relaxed text-sm">
            {shiftData.description}
          </Text>
        </View>

        <View className="px-6 mt-6">
          <View className="flex-row gap-4">
            <View className="flex-1 bg-card border border-border rounded-xl p-4 flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                <MapPin className="text-primary" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-xs text-muted-foreground mb-0.5">Dienst</Text>
                <Text className="text-sm font-semibold text-foreground" numberOfLines={1}>
                  {shiftData.room}
                </Text>
              </View>
            </View>

            <View className="flex-1 bg-card border border-border rounded-xl p-4 flex-row items-center gap-3">
              <View className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
                <Users className="text-primary" size={20} />
              </View>
              <View className="flex-1">
                <Text className="text-xs text-muted-foreground mb-0.5">Kamer</Text>
                <Text className="text-sm font-semibold text-foreground" numberOfLines={1}>
                  {shiftData.service}
                </Text>
              </View>
            </View>
          </View>

          <View className="mt-3 bg-card border border-border rounded-xl px-4 py-3 flex-row items-center justify-between">
            <Text className="text-sm text-muted-foreground">Dienst</Text>
            <View className="bg-amber-100 dark:bg-amber-900/40 px-3 py-1 rounded-full">
              <Text className="text-amber-700 dark:text-amber-300 text-xs font-semibold">
                {shiftData.serviceBadge}
              </Text>
            </View>
          </View>
        </View>

        <View className="px-6 mt-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-foreground">Team</Text>
            <Text className="text-sm text-primary font-medium">
              {shiftData.team.length} entiteiten →
            </Text>
          </View>

          <View className="gap-3">
            {shiftData.team.map((member) => (
              <View
                key={member.id}
                className="bg-card border border-border rounded-xl p-4 flex-row items-center justify-between"
              >
                <View className="flex-row items-center gap-3">
                  <View className="w-12 h-12 rounded-full bg-primary/20 items-center justify-center">
                    <Text className="text-primary font-bold text-sm">{member.avatarInitials}</Text>
                  </View>
                  <View>
                    <Text className="font-semibold text-foreground">{member.name}</Text>
                    <Text className="text-sm text-muted-foreground">{member.role}</Text>
                  </View>
                </View>
                <View className="bg-muted/50 px-3 py-1.5 rounded-lg">
                  <Text className="text-xs font-medium text-foreground">{member.time}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className="px-6 mt-8 mb-4">
          <View className="flex-row items-center gap-2 mb-4">
            <Bell className="text-foreground" size={20} />
            <Text className="text-lg font-bold text-foreground">Notities</Text>
            <Text className="text-sm text-primary font-medium ml-auto">
              {shiftData.notices.length} entiteiten →
            </Text>
          </View>

          <View className="gap-3">
            {shiftData.notices.map((notice) => (
              <View
                key={notice.id}
                className={`p-4 rounded-xl border ${getNoticeColor(notice.type)}`}
              >
                <View className="flex-row items-start gap-3">
                  <View className="mt-0.5">
                    <Info className={getNoticeIconColor(notice.type)} size={18} />
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-foreground mb-0.5">{notice.title}</Text>
                    <Text className="text-sm text-muted-foreground">{notice.description}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}