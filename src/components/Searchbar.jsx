import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go"

const Searchbar = () => {

  const navigate = useNavigate();
  const [searchName, setSearchName] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search/${searchName}`)
  }

  return (
  <form onSubmit={handleSubmit} autoComplete="off" className="p-1 text-gray-400 focus-within:text-gray-600 max-w-md">
    <label htmlFor="search-field" className="sr-only">
      Search songs
    </label>
    <div className="flex flex-row justify-start items-center">
      <GoSearch className="w-6 h-6 ml-4 text-gray-300" />
      <input 
        className="flex-1 bg-transparent border-none outline-none text-[#fff] text-base placeholder-gray-300 p-6 appearance-none"
        name="search-field"
        id="search-field"
        type="search"
        autoComplete="off"
        placeholder="Search"
        value={searchName}
        onChange={(event) => setSearchName(event.target.value)}
      />
    </div>
  </form>
  ); 
};

export default Searchbar;
