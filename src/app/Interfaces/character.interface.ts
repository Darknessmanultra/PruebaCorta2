export interface Character
{
    name: string
    status: string
    species: string
    location: {name:string}
    image: string
}

export interface ApiResponse {
    info: {
      count: number;
      pages: number;
      next: string | null;
      prev: string | null;
    };
    results: Character[];
  }