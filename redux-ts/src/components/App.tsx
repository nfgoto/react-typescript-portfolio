import { Provider } from "react-redux";
import { store } from "../state";
import PackageList from "./package-list/package-list.component";

function App() {
  return (
    <Provider store={store}>
      <h1>Search NPM Packages</h1>
      <PackageList />
    </Provider>
  );
}

export default App;
