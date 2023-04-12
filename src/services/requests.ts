import { apiClient } from "./apiClient";

export const getMovies = async () => {
  const { data } = await apiClient.get(
    `/movie/now_playing?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1`
  );
  return data;
};
