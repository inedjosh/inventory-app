import React, { useContext, useState } from "react";
import Input from "../components/form/input";
import Button from "../components/button/button";
import { AppContext } from "../context";
import { toast } from "react-toastify";
import { login } from "../firebase";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const { notification, setNotification, setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateFields = (details) => {
    let errors = {};

    if (!details.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(details.email)) {
      errors.email = "Invalid email format.";
    }

    if (!details.password) {
      errors.password = "Password is required.";
    } else if (details.password.length < 6) {
      errors.password = "Password should be at least 6 characters long.";
    }

    return errors;
  };

  const loginUser = async (event) => {
    event.preventDefault();

    const errors = validateFields({ email, password });

    if (Object.keys(errors).length === 0) {
      toast.promise(login(email, password, setNotification, setUser), {
        pending: "Authenticating user..., Hold on tight!",
        success: "User authenticated successfully",
        error: notification,
      });
      navigate("/dashboard");
    } else {
      toast.error("Please enter a valid email and password");
    }
  };

  return (
    <div className="bg-primary-bg h-screen w-screen">
      <div className="flex align-middle justify-center h-full">
        <div className="h-[300px] w-[350px] mt-20 flex flex-col justify-around   ">
          <h2 className="text-white text-center">Login</h2>
          <form onSubmit={loginUser}>
            <div className="my-5">
              <Input
                name={"email"}
                type={"email"}
                label={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-5">
              <Input
                name={"password"}
                type={"password"}
                label={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mt-20 items-center">
              <Button onClick={loginUser}>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
