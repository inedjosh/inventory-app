import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import Search from "../form/Search";
import { formatDate } from "../../helpers/dates";
import DashboardCard from "../DashboardCard";
import { categories, sales } from "../../models/dashboard";
import Button from "../button/button";
import DateChooser from "../form/dateChooser";
import { BsFillPersonFill } from "react-icons/bs";

function DashboardDiv(props) {
  const { user } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const [selectDate, setSelectDate] = useState(today);
  const [selectedCategoryStock, setSelectedCategoryStock] = useState("new");
  const [selectedCategoryNewStock, setSelectedCategoryNewStock] =
    useState("new");
  const [selectedCategorySales, setSelectedCategorySales] = useState("new");
  const [selectedCategoryReturn, setSelectedCategoryReturn] = useState("new");

  const date = new Date();
  const dateDisplay = formatDate(date);

  return (
    <div className="h-screen">
      <header className="border border-b-primary-color border-r-0 border-l-0 border-t-0  h-[13%] p-3 flex justify-between items-center">
        <div>
          <h5 className="text-xl text-primary-color">
            Welcome back, {user?.name}
          </h5>
          <p className="text-sm">
            Keep up with all the activities on the platform
          </p>
        </div>
        <div className="w-1/3">
          <Search
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name={"email"}
            label={"Search"}
            placeholder="Search product, sales, category"
          />
        </div>
      </header>
      <section className="flex h-[87%]">
        <div className="flex-[.7] p-10">
          <div>
            <h2>Daily Activity Report</h2>
            <p className="mt-2">
              Transaction for: <span className="text-bold">{dateDisplay}</span>{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10">
            <DashboardCard
              categories={categories}
              title={"Stock"}
              phoneAmount={"11"}
              laptopAmount={"20"}
              otherAmount={"4"}
            />
            <DashboardCard
              categories={categories}
              title={"Sales NGN"}
              phoneAmount={"N18000"}
              laptopAmount={"N200,000"}
              otherAmount={"N40000"}
            />
            <DashboardCard
              categories={categories}
              title={"New Stock"}
              phoneAmount={"20"}
              laptopAmount={"40"}
              otherAmount={"18"}
            />
            <DashboardCard
              categories={categories}
              title={"Returns"}
              phoneAmount={"2"}
              laptopAmount={"0"}
              otherAmount={"1"}
            />
          </div>
        </div>
        <div className="flex-[.3]  border border-l-primary-color border-t-0 border-b-0 border-r-0  p-3 h-full">
          <div className="w-full overflow-scroll h-full overflow-y-scroll ">
            <div className="flex justify-between  items-end">
              <div className="w-1/3">
                <Button bg="bg-green">Add Sales</Button>
              </div>
              <div className="w-1/2">
                <p>Select Date</p>
                <DateChooser
                  value={selectDate}
                  onChange={() => setSelectDate(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-10">
              <Search
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                name={"email"}
                label={"Search"}
                placeholder="Search sales..."
              />
              {sales.map((item) => (
                <div className="rounded p-5 bg-dark-gray my-4">
                  <div className="flex justify-between">
                    <p className="text-yellow">{item.phone}</p>
                    <p className="text-white">{item.color}</p>
                    <p className="text-white">{item.rom}</p>
                  </div>
                  <p className="text-xl my-4 text-green">N{item.amount}</p>
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <BsFillPersonFill />{" "}
                      <p className="ml-1">{item.customersName}</p>
                    </div>
                    <p>{item.number}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DashboardDiv;
