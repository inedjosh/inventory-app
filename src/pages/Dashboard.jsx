import React, { useContext, useEffect } from "react";
import { getUser } from "../firebase";
import { AppContext } from "../context";
import Loader from "../components/Loader";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { BiSolidCategory } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
// import { FaBoxesPacking } from "react-icons/fa";
// import { HiReceiptPercent } from "react-icons/hi";
// import { IoSettingsSharp } from "react-icons/io";
// import { BsPeopleFill, BsFillPersonFill } from "react-icons/bs";
import { ProfileImg } from "../assets";
import DashboardDiv from "../components/app/Dashboard";
import Sales from "../components/app/Sales";
import Credit from "../components/app/Credit";
import Products from "../components/app/Products";
import Invoice from "../components/app/Invoice";
import Settings from "../components/app/Settings";
import { sideNav } from "../models/dashboard";

function Dashboard(props) {
  const { setUser, user, setIsLoading, isLoading } = useContext(AppContext);

  const navigate = useNavigate();
  const { page } = useParams();

  const fetchUser = async () => {
    const data = await getUser(setIsLoading);

    if (data.isOnline) {
      setUser({ ...data.user });
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen w-screen bg-primary-bg text-white  flex">
      <div className="flex-[.22] relative border border-primary-color ">
        <div className="w-full fixed flex flex-col justify-center items-start">
          <div className="flex justify-center items-center mt-4">
            <div className=" w-14 h-14 m-3 flex justify-center  items-center">
              <img src={ProfileImg} alt={"profile-image"} />
            </div>
            <div>
              <h3 className="text-sm ">{user?.email}</h3>
              <p>{user?.role}</p>
            </div>
          </div>
          <div className="mt-5 px-5 w-1/5">
            {sideNav.map((item) => (
              <div
                onClick={() => {
                  navigate("/" + item.link);
                }}
                key={item.id}
                className={`cursor-pointer my-3 w-full py-3 rounded-md pl-4 ${
                  page === item.link && "bg-primary-color "
                }`}
              >
                {/* <item.icon /> */}
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className="px-5 mt-8">
            <div className={`cursor-pointer  w-full py-3 rounded-md pl-4 flex`}>
              <MdOutlineLogout />
              <p className="pl-2">Logout</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[.78]">
        {page === "dashboard" && <DashboardDiv />}
        {page === "sales" && <Sales />}
        {page === "credit" && <Credit />}
        {page === "products" && <Products />}
        {page === "invoice" && <Invoice />}
        {page === "settings" && <Settings />}
      </div>
    </div>
  );
}

export default Dashboard;
