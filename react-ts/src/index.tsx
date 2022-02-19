import ReactDOM from "react-dom";
import GuestList from "./state/GuestList";
import UserSearch, { users } from "./state/UserSearch";
import USearch from "./classes/UserSearch";
import UsrSrch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => (
  <div>
    <GuestList />
    <UserSearch />
    <EventComponent />
    <USearch users={users} />
    <UsrSrch />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
