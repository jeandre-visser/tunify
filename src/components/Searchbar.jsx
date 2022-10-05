import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go"

const Searchbar = () => (
  <form autocomplete="off"className="p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-field" className="sr-only">
      Search songs
    </label>
    <div className="flex flex-row justify-start items-center">

    </div>
  </form>
);

export default Searchbar;
