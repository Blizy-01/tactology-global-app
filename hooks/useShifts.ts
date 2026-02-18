import { useState, useEffect } from 'react';
import type { Shift, CalendarDay } from '@/types/shift';
import { SHIFTS, CALENDAR_DAYS, UPCOMING_SHIFTS } from '@/constants/mock-data';

interface UseShiftsReturn {
    shifts: Shift[];
    calendarDays: CalendarDay[];
    upcomingShifts: typeof UPCOMING_SHIFTS;
    isLoading: boolean;
    error: string | null;
    selectedDate: number;
    setSelectedDate: (date: number) => void;
    refetch: () => void;
}

export function useShifts(): UseShiftsReturn {
    const [shifts, setShifts] = useState<Shift[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState(18);

    const fetchShifts = () => {
        setIsLoading(true);
        setError(null);
        setTimeout(() => {
            try {
                setShifts(SHIFTS);
            } catch {
                setError('Failed to load shifts. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }, 600);
    };

    useEffect(() => {
        fetchShifts();
    }, []);

    return {
        shifts,
        calendarDays: CALENDAR_DAYS,
        upcomingShifts: UPCOMING_SHIFTS,
        isLoading,
        error,
        selectedDate,
        setSelectedDate,
        refetch: fetchShifts,
    };
}
