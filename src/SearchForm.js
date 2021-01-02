import React from "react";
import { useGlobalContext } from "./context";
import { HANDLE_SEARCH } from "./actions";

const SearchForm = () => {
  const { query, HANDLE_SEARCH } = useGlobalContext();
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <h2>search hacker news</h2>
      <input type="text" className="form-input" value={query} />
    </form>
  );
};

export default SearchForm;
