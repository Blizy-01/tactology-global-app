export type ShiftColor = 'blue' | 'amber' | 'rose';
export type ShiftStatus = 'Beschikbaar' | 'Bezet' | 'Pauze';

export interface CalendarDay {
    date: number;
    dayName: string;
    isToday: boolean;
}

export interface Shift {
    id: string;
    title: string;
    timeDisplay: string;
    staffName: string;
    status: ShiftStatus;
    room: string;
    color: ShiftColor;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    time: string;
    avatarInitials: string;
}

export interface ShiftNotice {
    id: string;
    title: string;
    description: string;
    type: 'info' | 'warning' | 'urgent';
}

export interface ShiftDetail extends Shift {
    date: string;
    time: string;
    service: string;
    serviceBadge: string;
    description: string;
    team: TeamMember[];
    notices: ShiftNotice[];
}
