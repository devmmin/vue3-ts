export interface Menu {
  name: string;
  children: {
    [key: string]: string[];
  };
}

export interface Path {
  [index: string]: { path: string };
}
