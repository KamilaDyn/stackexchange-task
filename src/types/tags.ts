export type Order = 'asc' | 'desc';
export type Sort = 'popular' | 'activity' | 'name';

export interface TagsData {
  name: string;
  count: number;
}
export interface TagsItems {
  [key: string]: string | number;
}
