import { SearchPackageActionType } from "../action-types";

export interface SearchPayload {
  name: string;
  link: string;
}

export interface SearchPackageActionStart {
  type: SearchPackageActionType.SEARCH_PACKAGES_START;
}

export interface SearchPackageSuccesAction {
  type: SearchPackageActionType.SEARCH_PACKAGES_SUCCESS;
  payload: SearchPayload[];
}

export interface SearchPackageErrorAction {
  type: SearchPackageActionType.SEARCH_PACKAGES_ERROR;
  payload: string;
}

export type SearchPackageAction =
  | SearchPackageActionStart
  | SearchPackageSuccesAction
  | SearchPackageErrorAction;
