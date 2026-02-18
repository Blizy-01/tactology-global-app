import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  User,
  MapPin,
  Star,
  Award,
  Settings,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
  CreditCard,
  FileText,
} from 'lucide-react-native';
import { ThemeToggle } from '@/components/ThemeToggle';

type SettingItem = {
  id: string;
  icon: React.ElementType;
  title: string;
  description?: string;
  action?: () => void;
  rightElement?: React.ReactNode;
};

const user = {
  name: 'Dr. Sarah Anderson',
  role: 'Senior Cardiologist',
  department: 'Cardiology Dept.',
  hospital: 'City General Hospital',
  avatar:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VXNlciUyMHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D',
  stats: {
    shifts: '142',
    rating: '4.9',
    experience: '8 yrs',
  },
};

const accountSettings: SettingItem[] = [
  { id: 'edit-profile', icon: User, title: 'Edit Profile', description: 'Update your personal information' },
  { id: 'payment', icon: CreditCard, title: 'Payment Methods', description: 'Manage your payment details' },
  { id: 'documents', icon: FileText, title: 'Documents', description: 'View certifications and licenses' },
];

const preferenceSettings: SettingItem[] = [
  { id: 'notifications', icon: Bell, title: 'Notifications', description: 'Manage push notifications' },
  {
    id: 'theme',
    icon: Settings,
    title: 'Appearance',
    description: 'Dark mode, theme colors',
    rightElement: <ThemeToggle />,
  },
  { id: 'security', icon: Shield, title: 'Security', description: 'Password, 2FA settings' },
];

const supportSettings: SettingItem[] = [
  { id: 'help', icon: HelpCircle, title: 'Help Center', description: 'FAQs and support' },
];

export default function ProfileScreen() {
  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: () => console.log('User logged out'),
      },
    ]);
  };

  const renderSettingItem = (item: SettingItem) => {
    const Icon = item.icon;
    return (
      <TouchableOpacity
        key={item.id}
        className="flex-row items-center py-4 border-b border-border last:border-b-0 active:bg-muted/50"
        onPress={item.action}
        disabled={!item.action && !item.rightElement}
      >
        <View className="w-10 h-10 rounded-full bg-secondary items-center justify-center mr-4">
          <Icon size={20} className="text-primary" />
        </View>
        <View className="flex-1">
          <Text className="text-foreground font-medium">{item.title}</Text>
          {item.description && (
            <Text className="text-sm text-muted-foreground mt-0.5">{item.description}</Text>
          )}
        </View>
        {item.rightElement || <ChevronRight size={20} className="text-muted-foreground" />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView contentContainerStyle={{ paddingBottom: 128 }} showsVerticalScrollIndicator={false}>
        <View className="px-6 pt-8 pb-6 items-center">
          <View className="relative">
            <Image
              source={{ uri: user.avatar }}
              className="w-24 h-24 rounded-full border-4 border-card"
              resizeMode="cover"
            />
            <View className="absolute bottom-0 right-0 bg-primary w-6 h-6 rounded-full border-2 border-card items-center justify-center">
              <View className="w-2.5 h-2.5 bg-white rounded-full" />
            </View>
          </View>

          <Text className="text-2xl font-bold text-foreground mt-4">{user.name}</Text>
          <Text className="text-primary font-medium mt-1">{user.role}</Text>
          <View className="flex-row items-center mt-2">
            <MapPin size={14} className="text-muted-foreground mr-1" />
            <Text className="text-sm text-muted-foreground">{user.department}</Text>
          </View>
        </View>

        <View className="px-6 mb-8">
          <View className="flex-row gap-4">
            <View className="flex-1 bg-card rounded-xl p-4 items-center border border-border">
              <Award size={20} className="text-primary mb-2" />
              <Text className="text-xl font-bold text-foreground">{user.stats.shifts}</Text>
              <Text className="text-xs text-muted-foreground mt-1">Shifts</Text>
            </View>
            <View className="flex-1 bg-card rounded-xl p-4 items-center border border-border">
              <Star size={20} className="text-primary mb-2" />
              <Text className="text-xl font-bold text-foreground">{user.stats.rating}</Text>
              <Text className="text-xs text-muted-foreground mt-1">Rating</Text>
            </View>
            <View className="flex-1 bg-card rounded-xl p-4 items-center border border-border">
              <User size={20} className="text-primary mb-2" />
              <Text className="text-xl font-bold text-foreground">{user.stats.experience}</Text>
              <Text className="text-xs text-muted-foreground mt-1">Exp.</Text>
            </View>
          </View>
        </View>

        <View className="px-6 gap-6">
          <View className="bg-card rounded-xl border border-border overflow-hidden">
            <View className="px-4 pt-4 pb-2">
              <Text className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Account
              </Text>
            </View>
            {accountSettings.map(renderSettingItem)}
          </View>

          <View className="bg-card rounded-xl border border-border overflow-hidden">
            <View className="px-4 pt-4 pb-2">
              <Text className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Preferences
              </Text>
            </View>
            {preferenceSettings.map(renderSettingItem)}
          </View>

          <View className="bg-card rounded-xl border border-border overflow-hidden">
            <View className="px-4 pt-4 pb-2">
              <Text className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Support
              </Text>
            </View>
            {supportSettings.map(renderSettingItem)}
          </View>

          <TouchableOpacity
            onPress={handleLogout}
            className="bg-destructive/10 rounded-xl p-4 flex-row items-center justify-center mt-4 mb-4"
          >
            <LogOut size={20} className="text-destructive mr-2" />
            <Text className="text-destructive font-semibold">Log Out</Text>
          </TouchableOpacity>

          <Text className="text-center text-xs text-muted-foreground pb-4">
            Tactology App v1.0.0
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}