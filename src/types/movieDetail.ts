export interface MovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  credits: Credits;
  genres: Genre[];
  homepage: string;
  id: number;
  images: Images;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: Date;
  release_dates: ReleaseDates;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  recommendations: ResponseRecommendations;
  videos: Videos;
  vote_average: number;
  vote_count: number;
}

export type ResponseRecommendations = {
  page: number;
  results: Recommendations[];
};

export type Recommendations = {
  id: number;
  poster_path: string;
  original_title: string;
  title: string;
  release_date: string;
};

export interface Credits {
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  cast_id?: number;
  character?: string;
  credit_id: string;
  department?: string;
  gender: number;
  id: number;
  job?: string;
  known_for_department: string;
  name: string;
  order?: number;
  original_name: string;
  popularity: number;
  profile_path: ProfilePath | null;
}

export enum ProfilePath {
  RgTJIp5VP2VzUUSSOhIGAumrnjmJpg = "/rgTJIp5vP2VzUUSSOhIGAumrnjm.jpg",
  Sqxxivty5GJoZaqk9QEVN1LlrUtJpg = "/sqxxivty5gJoZaqk9qEVN1LlrUt.jpg",
  YpCNW464Te0P3AH6S11YI4WfIz3Jpg = "/ypCnW464Te0p3AH6S11YI4wfIz3.jpg",
}

export interface Genre {
  id: number;
  name: string;
}

export interface Images {
  backdrops: any[];
  logos: any[];
  posters: any[];
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ReleaseDates {
  results: ReleaseDatesResult[];
}

export interface ReleaseDatesResult {
  iso_3166_1: string;
  release_dates: ReleaseDate[];
}

export interface ReleaseDate {
  certification: string;
  descriptors: any[];
  iso_639_1: string;
  note: string;
  release_date: Date;
  type: number;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Videos {
  results: VideosResult[];
}

export interface VideosResult {
  id: string;
  key: string;
  name: string;
  official: boolean;
  published_at: Date;
  site: string;
  size: number;
  type: string;
}
