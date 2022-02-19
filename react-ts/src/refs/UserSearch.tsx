import { FC, useState, useRef, useEffect } from "react";
import { User, users } from "../state/UserSearch";

type Unpacked<T> = T extends (infer U)[] ? U : T;

const UserSearch: FC = () => {
  // the ref could be null if not assigned to an element
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [result, setResult] = useState<User | undefined>();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSearchChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setName(e.target.value);
  const onclick = () => (
    setName(""),
    setResult(users.find((u) => u.name.toLowerCase() === name)),
    setClicked(true)
  );
  const displayResult = () =>
    result ? (
      <div>
        Name: {result.name} <br /> Age: {result.age}
      </div>
    ) : (
      "user not found"
    );

  return (
    <div>
      <h3>User Search with focus</h3>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={onSearchChange}
      />
      <button onClick={onclick}>Find</button>
      <br />
      {clicked && displayResult()}
    </div>
  );
};

export default UserSearch;
