export interface Word {
  id: number;
  original: string;
  definition: string | null;
  translation: string;
  rating: number;
  cardsetId: number | null;
}
