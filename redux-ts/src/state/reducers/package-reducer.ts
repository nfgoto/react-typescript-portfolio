import { SearchPackageActionType } from "../action-types";
import { SearchPackageAction, SearchPayload } from "../actions";

interface SearchPackageState {
  loading: boolean;
  error: string | null;
  data: SearchPayload[];
}

const initialState: SearchPackageState = {
  loading: false,
  error: null,
  data: [],
};

export const searchPackageReducer = (
  state: SearchPackageState = initialState,
  action: SearchPackageAction
): SearchPackageState => {
  switch (action.type) {
    case SearchPackageActionType.SEARCH_PACKAGES_START: {
      return { loading: true, error: null, data: [] };
    }
    case SearchPackageActionType.SEARCH_PACKAGES_SUCCESS: {
      return { loading: false, error: null, data: action.payload };
    }
    case SearchPackageActionType.SEARCH_PACKAGES_ERROR: {
      return { loading: false, error: action.payload, data: [] };
    }
    default:
      return state;
  }
};
