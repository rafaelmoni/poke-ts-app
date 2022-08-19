export interface Pokemon {
  name: string;
  url: string;
}

export interface PokeList {
  count: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}
