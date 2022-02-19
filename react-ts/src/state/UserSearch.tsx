import { FC, useState } from "react";

type Unpacked<T> = T extends (infer U)[] ? U : T;

export const users = [
  { name: "John", age: 24 },
  { name: "Juma", age: 19 },
  { name: "Sikili", age: 72 },
  { name: "Yihua", age: 31 },
  { name: "Paoa", age: 45 },
];

export type User = Unpacked<typeof users>;

const UserSearch: FC = () => {
  const [name, setName] = useState("");
  const [result, setResult] = useState<User | undefined>();
  const [clicked, setClicked] = useState(false);

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
      <h3>User Search</h3>
      <input type="text" value={name} onChange={onSearchChange} />
      <button onClick={onclick}>Find</button>
      <br />
      {clicked && displayResult()}
    </div>
  );
};

export default UserSearch;
