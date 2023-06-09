export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

export interface IGenre {
  id: number;
  name: string;
}
export interface IMovieInfo extends IMovie {
  genres: IGenre[];
  spoken_languages: {
    english_name: string;
    name: string;
  }[];
  runtime: number;
}
