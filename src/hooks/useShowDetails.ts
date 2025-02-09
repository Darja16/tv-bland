import { useQuery } from '@tanstack/react-query';
import { fetchShowDetails } from '../services';

/**
 * Custom hook for fetching details of a specific TV show.
 *
 * @param {string} id - The ID of the TV show to fetch details for.
 *
 * @property showDetails The fetched show data
 * @property isLoading - Indicates if the data is currently being fetched
 * @property isError - Indicates if an error occurred while fetching the data
 *
 * @returns Hook utilities for managing the show data
 */
export function useShowDetails(id: string) {
  const {
    data: showDetails,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['showDetails', id],
    queryFn: () => fetchShowDetails(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

  return { showDetails, isLoading, isError };
}
