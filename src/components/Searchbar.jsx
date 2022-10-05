import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go"

const Searchbar = () => {

  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const handleSubmit = (event) => {
    event.preventDefualt();
    navigate(`/search/${search}`)
  }

  return (
  <form onSubmit={handleSubmit} autocomplete="off"className="p-2 text-gray-400 focus-within:text-gray-600">
    <label htmlFor="search-field" className="sr-only">
      Search songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <GoSearch className="w-8 h-8 ml-4 text-gray-300" />
      <input 
      className="flex-1 bg-transparent border-none outline-none text-[#fff] text-base placeholder-gray-300 p-6"
        name="search-field"
        id="search-field"
        type="search"
        autoComplete="off"
        placeholder="Search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  </form>
  ); 
};

export default Searchbar;
