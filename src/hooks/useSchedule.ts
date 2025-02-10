import { useQuery } from '@tanstack/react-query';
import { fetchSchedule } from '../services';

interface ScheduleItem {
  id: number;
  name: string;
  season: number;
  rating: number | null;
  image: string | null;
}

/**
 * Custom hook for fetching the schedule

 * @property schedule The fetched schedule data
 * @property isLoading - Indicates if the data is currently being fetched
 * @property isError - Indicates if an error occurred while fetching the data
 *
 * @returns Hook utilities for managing the schedule data
 */
export function useSchedule(page: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['schedule', page],
    queryFn: () => fetchSchedule(page),
    staleTime: 1000 * 60 * 5,
  });

  const schedule: ScheduleItem[] =
    data?.map((item: any) => ({
      id: item.id,
      name: item.name,
      season: item.season,
      rating: item.rating.average ?? 0,
      image: item.image?.medium || null,
    })) || [];

  return { schedule, isLoading, isError };
}
