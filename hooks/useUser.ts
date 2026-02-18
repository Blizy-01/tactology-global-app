import { CURRENT_USER } from '@/constants/mock-data';
import type { User } from '@/types/user';

export function useUser(): { user: User } {
    return { user: CURRENT_USER };
}
