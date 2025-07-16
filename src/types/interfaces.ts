interface Character {
  id: number;
  name: string;
  imageUrl?: string;
  system?: string;
  extras?: Record<string, string>[];
  createdAt?: string;
}
interface CharacterData extends Character {
  levelBonus: {
    key: string;
    value: number;
  }[];
  layouts: {
    stattsLayout: StattsLayout;
    expertiseLayout: ExpertiseLayout;
    listLayout: ListLayout[];
    notesLayout: NotesLayout[];
  };
}

interface Layout {
  id: number;
  position: number;
}
interface StattsLayout extends Layout {
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
interface ExpertiseLayout extends Layout {
  expertises: {
    key: string;
    primaryValue: number;
    secondaryValue: number;
  }[];
}
interface ListLayout extends Layout {
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
interface NotesLayout extends Layout {
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

export type { Character, CharacterData, Form };
