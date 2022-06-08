
export interface CharactersInfo {
  count: number;
  next: string;
  pages: number;
  prev: string | null
}

interface Location {
  name: string;
  url: string;
}

export interface CharacterResults {
  created:string;
  episode:string[];
  gender:string;
  id:number;
  image:string;
  location: Location;
  name: string;
  origin: Location;
  species: string;
  status: string;
  type:string;
  url:string;
}

export interface Characters {
  info: CharactersInfo;
  results:CharacterResults[];
}

export interface CharacterType {
  data: Characters;
}