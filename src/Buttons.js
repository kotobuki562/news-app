import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
      <p>some values</p>
      <button disabled={isLoading} onClick={() => handlePage("dec")}>
        prev
      </button>
    </div>
  );
};

export default Buttons;
