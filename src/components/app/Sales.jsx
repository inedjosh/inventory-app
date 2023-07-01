import React, { useState } from "react";
import DashboardHeader from "./../DashboardHeader";

function Sales(props) {
  const [method, setMothod] = useState("direct");
  return (
    <div className="p-5">
      <DashboardHeader page={"Invoice"} />
      <div className="flex mt-10 w-1/4 justify-between">
        <div>
          <div onClick={() => setMethod("swap")}>
            <h2
              className={`font-light ${
                method === "direct" && "border-b-primary-color border-b"
              } `}
            >
              Direct sale
            </h2>
          </div>
          <div onClick={() => setMethod("swap")} className="">
            <h2
              onClick={() => setMethod("swap")}
              className={`font-light ${
                method === "swap" && "border-b-primary-color border-b"
              } cursor-pointer `}
            >
              Swap sale
            </h2>
          </div>
        </div>
        <div>{/* <Button>Save & Print</Button> */}</div>
      </div>
    </div>
  );
}

export default Sales;
