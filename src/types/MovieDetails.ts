import { Movie } from '@/types/Movie';

export interface MovieDetailsType extends Movie {
    belongs_to_collection: Belong[];
    budget: number;
    genres: Genre[];
    homepage: string;
    imdb_id: string;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
}

interface SpokenLanguages {
    iso_639_1: string;
    name: string;
}

interface Belong {
    backdrop_path: string;
    id: number;
    name: string;
    poster_path: string;
}

interface Genre {
    id: number;
    name: number;
}

interface ProductionCompanies {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
}

interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}
