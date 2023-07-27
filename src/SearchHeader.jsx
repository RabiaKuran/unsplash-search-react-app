import { useState } from "react";

function SearchHeader({ search }) {
  const [value, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne arıyorsunuz?</label>
        <input onChange={handleChange} value={value} />
      </form>
    </div>
  );
}

export default SearchHeader;
