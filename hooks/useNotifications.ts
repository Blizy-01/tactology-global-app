import { useState, useEffect } from 'react';
import type { AppNotification } from '@/types/notification';
import { NOTIFICATIONS } from '@/constants/mock-data';

interface UseNotificationsReturn {
    notifications: AppNotification[];
    unreadCount: number;
    isLoading: boolean;
}

export function useNotifications(): UseNotificationsReturn {
    const [notifications, setNotifications] = useState<AppNotification[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setNotifications(NOTIFICATIONS);
            setIsLoading(false);
        }, 400);
    }, []);

    return {
        notifications,
        unreadCount: notifications.length,
        isLoading,
    };
}
