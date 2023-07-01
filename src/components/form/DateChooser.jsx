import React from "react";

function DateChooser(props) {
  return (
    <input
      type="date"
      className="w-full bg-blue-200 text-light px-4 py-2 rounded-md"
      {...props}
    />
  );
}

export default DateChooser;
