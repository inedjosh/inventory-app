import React from "react";
import { LoaderGiff } from "../assets";

function Loader(props) {
  return (
    <div className="h-screen w-screen bg-primary-bg flex justify-center items-center">
      <img src={LoaderGiff} />
    </div>
  );
}

export default Loader;
