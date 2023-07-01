import React from "react";

function Button(props) {
  return (
    <button
      type="submit"
      onClick={props.onClick}
      className={`rounded w-full ${
        props.bg ? props.bg : "bg-primary-color"
      } px-3 py-2.5 text-sm font-light text-white shadow-sm hover:bg-primary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 `}
    >
      {props.children}
    </button>
  );
}

export default Button;
