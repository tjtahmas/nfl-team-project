import React, { useState } from "react";
function Search() {
  const [formState, setFormState] = useState({
    search: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const { search } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  return (
    <section className="my-5">
      <form id="search-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="search">Enter a Team:</label>
          <input
            type="text"
            name="search"
            defaultValue={search}
            // onBlur={handleChange}
          />
        </div>
        </form>
    </section>
  );
}

export default Search;
