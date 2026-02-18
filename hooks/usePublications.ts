import { useState, useEffect } from 'react';
import type { Publication } from '@/types/publication';
import { PUBLICATIONS } from '@/constants/mock-data';

interface UsePublicationsReturn {
    publications: Publication[];
    isLoading: boolean;
    error: string | null;
    refetch: () => void;
}

export function usePublications(): UsePublicationsReturn {
    const [publications, setPublications] = useState<Publication[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPublications = () => {
        setIsLoading(true);
        setError(null);
        setTimeout(() => {
            try {
                setPublications(PUBLICATIONS);
            } catch {
                setError('Failed to load publications. Please try again.');
            } finally {
                setIsLoading(false);
            }
        }, 700);
    };

    useEffect(() => {
        fetchPublications();
    }, []);

    return {
        publications,
        isLoading,
        error,
        refetch: fetchPublications,
    };
}
