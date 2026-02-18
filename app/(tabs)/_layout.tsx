import { Tabs } from 'expo-router';
import { Home, Calendar, FileText, User } from 'lucide-react-native';
import { cssInterop, useColorScheme } from 'nativewind';
import { View } from 'react-native';

cssInterop(Home, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(Calendar, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(FileText, { className: { target: 'style', nativeStyleToProp: { color: true } } });
cssInterop(User, { className: { target: 'style', nativeStyleToProp: { color: true } } });

export default function TabsLayout() {
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: isDark ? '#0f172a' : '#ffffff',
          borderTopColor: isDark ? '#1e293b' : '#e2e8f0',
          height: 84,
          paddingBottom: 28,
          paddingTop: 12,
        },
        tabBarActiveTintColor: isDark ? '#818cf8' : '#4f46e5',
        tabBarInactiveTintColor: isDark ? '#64748b' : '#94a3b8',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Home
              className={focused ? 'text-primary' : 'text-muted-foreground'}
              size={24}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Rooster',
          tabBarIcon: ({ focused }) => (
            <View className={focused ? 'bg-primary/10 px-3 py-1 rounded-full' : ''}>
              <Calendar
                className={focused ? 'text-primary' : 'text-muted-foreground'}
                size={24}
                strokeWidth={focused ? 2.5 : 2}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="publications"
        options={{
          title: 'Publications',
          tabBarIcon: ({ focused }) => (
            <FileText
              className={focused ? 'text-primary' : 'text-muted-foreground'}
              size={24}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <User
              className={focused ? 'text-primary' : 'text-muted-foreground'}
              size={24}
              strokeWidth={focused ? 2.5 : 2}
            />
          ),
        }}
      />
    </Tabs>
  );
}