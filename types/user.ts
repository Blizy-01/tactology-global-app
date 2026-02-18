export interface UserStats {
    shifts: string;
    rating: string;
    experience: string;
}

export interface User {
    name: string;
    role: string;
    department: string;
    avatar: string;
    stats: UserStats;
}
