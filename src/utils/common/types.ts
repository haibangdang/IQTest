export type Nullable<T> = T | null;
export type AnyObject = Record<string, any>;
export type RouteParams = Nullable<string | string[]>;
export interface MetaState {
  error: Nullable<string>;
  isLoading: boolean;
}
