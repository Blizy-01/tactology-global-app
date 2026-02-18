export type NotificationType = 'alert' | 'success' | 'info';

export interface AppNotification {
    id: string;
    type: NotificationType;
    title: string;
    body: string;
    time: string;
}
