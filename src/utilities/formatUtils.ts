import { IGenre } from "@/interfaces/IMovie";

export const formatMinToHr = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const hrText = hours > 0 ? `${hours}hr` : "";
  const minText = mins > 0 ? `${mins}min` : "";
  return `${hrText} ${minText}`;
};

export const formatGenres = (genres: IGenre[]) => {
  const genreTitle = genres?.map(({ name }) => name);
  const formattedGenres = genreTitle.join("/");
  return formattedGenres;
};

export const formatSlug = (slug: string = "") => {
  const formattedSlug = slug.split("-").join(" ").toUpperCase();
  return formattedSlug;
};
