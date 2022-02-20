import { ChangeEventHandler, FC, FormEventHandler, useState } from "react";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";

const PackageList: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchPackageActionCreator } = useActions();

  const { data, error, loading } = useTypedSelector((store) => store.packages);
  console.log(data, error, loading);

  const handleSearchTermChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => setSearchTerm(target.value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    searchPackageActionCreator(searchTerm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleSearchTermChange}
          value={searchTerm}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading...</h3>}
      {!error &&
        !loading &&
        data.map(({ name, link }, i) => (
          <div key={`${name} - ${i}`}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          </div>
        ))}
    </div>
  );
};

export default PackageList;
