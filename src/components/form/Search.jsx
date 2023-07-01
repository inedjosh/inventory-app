import React from "react";
import { BiSearch } from "react-icons/bi";

function Search(props) {
  return (
    <div className="w-full">
      <div className="relative ">
        <input
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          name={props.name}
          id={props.name}
          placeholder={props.placeholder}
          className="block w-full pl-10 rounded border border-primary-color bg-primary-bg text-white font-light py-2 px-2 text-gray-900 shadow-sm ring-1/2 ring-inset ring-primary-color outline-none placeholder:text-gray-400 focus:ring-1/2 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
        />
        <div className="absolute top-3 left-3">
          <BiSearch color="#fff" fontSize={"20px"} />
        </div>
      </div>
    </div>
  );
}

export default Search;
