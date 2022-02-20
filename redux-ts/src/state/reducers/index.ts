import { combineReducers } from "redux";
import { searchPackageReducer } from "./package-reducer";

const reducers = combineReducers({
  packages: searchPackageReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
