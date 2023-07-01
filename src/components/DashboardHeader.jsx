import React from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

function DashboardHeader({ page }) {
  return (
    <div className="flex justify-between w-full items-center">
      <div className="flex items-end">
        <h1 className="text-primary-color text-bold mr-3 font-light">Manage</h1>
        <p>{page}</p>
      </div>
      <div className="flex items-center">
        <HiHome />
        <Link
          className="mx-2 cursor-pointer font-light text-sm"
          to={"/dashboard"}
        >
          Home &gt;
        </Link>
        <p>{page}</p>
      </div>
    </div>
  );
}

export default DashboardHeader;
