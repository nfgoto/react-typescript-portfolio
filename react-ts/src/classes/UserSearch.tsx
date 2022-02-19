import type { User } from "../state/UserSearch";
import { Component, ReactNode } from "react";

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  result: User | undefined;
  clicked: boolean;
}

class UserSearch extends Component<UserSearchProps> {
  state: Readonly<UserSearchState> = {
    name: "",
    result: undefined,
    clicked: false,
  };

  onSearchChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    this.setState({ name: target.value });

  onclick = () => (
    this.setState({ name: "" }),
    this.setState({
      result: this.props.users.find(
        (u) => u.name.toLowerCase() === this.state.name
      ),
    }),
    this.setState({ clicked: true })
  );

  displayResult = () =>
    this.state.result ? (
      <div>
        Name: {this.state.result.name} <br /> Age: {this.state.result.age}
      </div>
    ) : (
      "user not found"
    );

  render(): ReactNode {
    const { name, clicked } = this.state;
    return (
      <div>
        <h3>Classic User Search</h3>
        <input type="text" value={name} onChange={this.onSearchChange} />
        <button onClick={this.onclick}>Find</button>
        <br />
        {clicked && this.displayResult()}
      </div>
    );
  }
}

export default UserSearch;
