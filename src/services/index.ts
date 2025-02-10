const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

interface ScheduleItem {
  id: number;
  name: string;
  season: number;
  rating: { average: number | null };
  image: { medium: string | null };
}

interface ShowDetails {
  type: string;
  language: string;
  runtime: number;
  name: string;
  genres: string[];
  status: string;
  summary: string;
  image: { medium: string };
  rating: { average: number };
  network: { name: string | null };
  schedule: {
    days: string[];
  };
}

/**
 * @throws Error Throws an error if the API base URL is not defined in the environment variables
 */
if (!API_BASE_URL) {
  throw new Error('API_BASE_URL is not defined');
}

/**
 * Fetches the schedule data from TV Maze.
 *
 * @async
 * @throws Error Throws an error if the fetch request fails
 *
 * @returns Promise A promise that resolves to an array of schedules
 */
export const fetchSchedule = async (page: number): Promise<ScheduleItem[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows?page=${page}`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`HTTP error! ${error}`);
  }
};

/**
 * Fetches details of a specific show by its ID.
 *
 * @param id - The ID of the show.
 */
export const fetchShowDetails = async (id: string): Promise<ShowDetails> => {
  try {
    const response = await fetch(`${API_BASE_URL}/shows/${id}`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`HTTP error! ${error}`);
  }
};
