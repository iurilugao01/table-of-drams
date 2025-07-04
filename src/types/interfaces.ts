interface Character {
  id: number;
  name: string;
  imageUrl: string;
  system?: string;
  extras?: Record<string, string>[];
  createdAt?: string;
}
interface Form {
  name: string;
  system: string;
  extras: Record<string, string>[];
}

export type { Character, Form };
