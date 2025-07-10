interface Character {
  id: number;
  name: string;
  imageUrl: string;
  system?: string;
  extras?: Record<string, string>[];
  createdAt?: string;
}
interface CharacterData extends Character {
  layouts: StattsLayout[] | ExpertiseLayout[] | ListLayout[] | NotesLAyout[];
}
interface StattsLayout {
  sttats: {
    key: string;
    value: number;
  }[];
  bars: {
    key: string;
    value: number;
    color: string;
  };
}
interface ExpertiseLayout {
  expertises: {
    key: string;
    primaryValue: number;
    secondaryValue: number;
  }[];
}
interface ListLayout {
  key: string;
  extraInfos: {
    key: string;
    value: string;
  }[];
  list: {
    key: string;
    extraInfos: {
      key: string;
      value: string;
      isReference?: boolean;
    }[];
  }[];
}
interface NotesLAyout {
  key: string;
  extraInfos: {
    key: string;
    value: string;
    type: "mini" | "big";
  }[];
}
interface Form {
  name: string;
  system: string;
  extras: Record<string, string>[];
}

export type { Character, Form };
