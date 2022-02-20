import axios from "axios";
import { Dispatch } from "redux";
import { SearchPackageActionType as spt } from "../action-types";
import { SearchPackageAction, SearchPayload } from "../actions";

interface PackageObject {
  objects: { package: { name: string; links: { npm: string } } }[];
}

export const searchPackageActionCreator = (term: string) => {
  return async (dispatch: Dispatch<SearchPackageAction>) => {
    dispatch({ type: spt.SEARCH_PACKAGES_START });

    try {
      const { data } = await axios.get<PackageObject>(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const packageNames: SearchPayload[] = data.objects.map(
        ({
          package: {
            name,
            links: { npm },
          },
        }) => ({ name, link: npm })
      );
      dispatch({ type: spt.SEARCH_PACKAGES_SUCCESS, payload: packageNames });
    } catch (error) {
      dispatch({
        type: spt.SEARCH_PACKAGES_ERROR,
        payload: (error as Error)?.message,
      });
    }
  };
};
