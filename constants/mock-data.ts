import type { CalendarDay, Shift, ShiftDetail } from '@/types/shift';
import type { Publication } from '@/types/publication';
import type { User } from '@/types/user';
import type { AppNotification } from '@/types/notification';

export const CALENDAR_DAYS: CalendarDay[] = [
    { date: 15, dayName: 'Thu', isToday: false },
    { date: 16, dayName: 'Fri', isToday: false },
    { date: 17, dayName: 'Sat', isToday: false },
    { date: 18, dayName: 'Sun', isToday: true },
    { date: 19, dayName: 'Mon', isToday: false },
    { date: 20, dayName: 'Tue', isToday: false },
    { date: 21, dayName: 'Wed', isToday: false },
];

export const SHIFTS: Shift[] = [
    {
        id: '1',
        title: 'OchtendShift',
        timeDisplay: '08:00 - 12:00',
        staffName: 'Omar r.',
        status: 'Beschikbaar',
        room: 'Room1',
        color: 'blue',
    },
    {
        id: '2',
        title: 'OchtendShift',
        timeDisplay: '09:00 - 13:00',
        staffName: 'Omar r.',
        status: 'Beschikbaar',
        room: 'Room1',
        color: 'blue',
    },
    {
        id: '3',
        title: 'MiddagShift',
        timeDisplay: '12:00 - 20:00',
        staffName: 'Elijn a.',
        status: 'Beschikbaar',
        room: 'Room1',
        color: 'amber',
    },
    {
        id: '4',
        title: 'OchtendShift',
        timeDisplay: '08:00 - 16:00',
        staffName: 'Omar r.',
        status: 'Beschikbaar',
        room: 'Room1',
        color: 'blue',
    },
    {
        id: '5',
        title: 'MiddagShift',
        timeDisplay: '12:00 - 20:00',
        staffName: 'Elijn a.',
        status: 'Beschikbaar',
        room: 'Room1',
        color: 'amber',
    },
];

export const SHIFT_DETAIL: ShiftDetail = {
    id: '1',
    title: 'OchtendShift',
    timeDisplay: '08:00 - 12:00',
    time: '8:00am - 12:00pm',
    date: '10 - 02 - 2024',
    room: 'Room1',
    staffName: 'Omar r.',
    status: 'Beschikbaar',
    color: 'blue',
    service: 'Verkoeverkamte',
    serviceBadge: 'Ochtend 8:00-12:00',
    description:
        'Dit is een kamer voor gesprekken tussen chirurgische artsen en patiënten over behandelplannen en hersteltrajecten.',
    team: [
        { id: '1', name: 'Omar r.', role: 'Elijn a.', time: '4:00 - 8:00', avatarInitials: 'OR' },
        { id: '2', name: 'Omar r.', role: 'Elijn a.', time: '8:00 - 12:00', avatarInitials: 'OR' },
    ],
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
    ],
};

export const UPCOMING_SHIFTS = [
    { day: 'Mon', date: '19', time: '08:00 – 16:00', room: 'Room 3B', color: 'blue' as const },
    { day: 'Wed', date: '21', time: '12:00 – 20:00', room: 'Room 1A', color: 'amber' as const },
    { day: 'Fri', date: '23', time: '08:00 – 16:00', room: 'Room 3B', color: 'blue' as const },
];

export const PUBLICATIONS: Publication[] = [
    {
        id: '1',
        title: 'Vaccine hesitancy trends',
        description:
            'How do you build stroke risk tools that are both clinically powerful and user-friendly for everyday care?',
        category: 'Covid',
        secondaryCategory: 'Vaccine',
        coverImage:
            'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&auto=format&fit=crop&q=60',
        author: 'Elijah Oyelakin',
        authorAvatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60',
        date: '25 Jan 2025',
        readTime: '2 mins',
    },
    {
        id: '2',
        title: 'Vaccine hesitancy trends',
        description:
            'How do you build stroke risk tools that are both clinically powerful and user-friendly for everyday care?',
        category: 'Vaccine',
        coverImage:
            'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60',
        author: 'Elijah Oyelakin',
        authorAvatar:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60',
        date: '25 Jan 2025',
        readTime: '2 mins',
    },
    {
        id: '3',
        title: 'Managing Shift Fatigue in Nursing',
        description:
            'Evidence-based strategies to reduce burnout and improve patient care outcomes during 12-hour shifts.',
        category: 'Wellness',
        coverImage:
            'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&auto=format&fit=crop&q=60',
        author: 'Emily Roberts',
        authorAvatar:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60',
        date: 'Oct 20, 2024',
        readTime: '4 mins',
    },
];

export const CURRENT_USER: User = {
    name: 'Dr. Sarah Anderson',
    role: 'Senior Cardiologist',
    department: 'Cardiology Dept.',
    avatar:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60',
    stats: {
        shifts: '142',
        rating: '4.9',
        experience: '8 yrs',
    },
};

export const NOTIFICATIONS: AppNotification[] = [
    {
        id: '1',
        type: 'alert',
        title: 'Shift Change Request',
        body: 'Omar R. requested to swap the Sunday 12:00 shift with you.',
        time: '10 min ago',
    },
    {
        id: '2',
        type: 'success',
        title: 'Shift Confirmed',
        body: 'Your shift on Monday 08:00 – 16:00 has been confirmed.',
        time: '1 hr ago',
    },
    {
        id: '3',
        type: 'info',
        title: 'New Publication',
        body: 'A new guideline on cardiac care protocols has been published.',
        time: '3 hrs ago',
    },
];
