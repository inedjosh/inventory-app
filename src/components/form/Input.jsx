import React from "react";

function Input(props) {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor="first-name"
          className="block text-sm font-light leading-6 text-white"
        >
          {props.label}
        </label>
        <div className="mt-2">
          <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            name={props.name}
            id={props.name}
            autoComplete="off"
            className="block w-full rounded border border-primary-color bg-primary-bg text-white font-light py-2 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-primary-color outline-none placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-primary-color sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
}

export default Input;
