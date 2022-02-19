import { useState } from "react";

const GuestList: React.FC = () => {
  const [guests, setGuests] = useState<string[]>([]);
  const [name, setName] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setName(target.value);

  const onClick = () => (setName(""), setGuests([...guests, name]));

  return (
    <div>
      <h3>Guest List</h3>
      <input type="text" value={name} onChange={handleChange} />
      <br />
      <button onClick={onClick}>Add Guest</button>
      <ul>
        {guests.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;
