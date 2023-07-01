import React from "react";

function DashboardCard({
  title,
  categories,
  phoneAmount,
  laptopAmount,
  otherAmount,
}) {
  return (
    <div className="bg-primary-color-20 rounded-md p-3">
      <div className="flex justify-between">
        <h2>{title}</h2>
        <div className="flex ">
          {categories.map((item) => (
            <div
              key={item.id}
              //   onClick={() => console.log("hello")}
              className="
                bg-primary-color-10 px-2 h-7 rounded-md 
               mx-1 cursor-pointer"
            >
              <small className="font-light text-xs">{item.name}</small>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between pr-8 my-1">
          <p className="">Phones</p>
          <p>{phoneAmount}</p>
        </div>
        <div className="flex justify-between pr-8 my-1">
          <p>Laptops</p>
          <p>{laptopAmount}</p>
        </div>
        <div className="flex justify-between pr-8 my-1">
          <p>Others</p>
          <p>{otherAmount}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
