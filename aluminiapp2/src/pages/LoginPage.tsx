import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Admin, NormalUser } from "../data/data";
import { useNavigate } from "react-router";
import * as authAction from "../redux/actions"
import { useDispatch } from "react-redux";


function LoginPage(props: any) {
  const navigate=  useNavigate()
  const dispatch =  useDispatch()
  const [showPassword, setShowPassword]: any = useState<any>(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const emptyState = { username: "", password: "" };
  const [loginDetails, setLoginDetails] = useState<any>(emptyState);
  const handleInputChange = (e: any) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
    console.log(loginDetails)
  };

  const validateBeforeSubmit = () => {
    // Check if username and password are not empty
    if (!loginDetails.username.trim()) {
      alert("Username cannot be empty");
      return false;
    } else if (!loginDetails.password.trim()) {
      alert("Password cannot be empty");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateBeforeSubmit()) {
      console.log(loginDetails.username===Admin.username)
      if(loginDetails.username===Admin.username && loginDetails.password===Admin.password){
         dispatch(authAction.loginAction("admin"))
         setLoginDetails(emptyState)
         navigate("/admin")


      }
      else if(loginDetails.username===NormalUser.username && loginDetails.password===NormalUser.password){
        dispatch(authAction.loginAction("user"))
        setLoginDetails(emptyState)
        navigate("/")
     }
     else{
      alert("Invalid Credentials")
     }

    }
  };

  return (
    <div className="flex flex-col  min-h-[100vh] font-serif">
      <Navbar activePage="login" />
      <div className="flex flex-1 homebackground min-h-[80vh]">
        <div className="min-w-full min-h-full flex-1 bg-[#000000ac] flex-col flex px-10 py-10">
          <div data-aos="fade-down" className="px-5 text-center mx-auto text-[40px] mt-[150px] font-bold text-white font-serif">
            Welcome Back
          </div>
          <div className="p-5 bg-[#0000008f] w-[450px] mx-auto mb-[160px] flex flex-col gap-4" data-aos="fade-up">
            <div>
              <input
                onChange={handleInputChange}
                type="text"
                name="username"
                className="w-full h-10  bg-[#d6d6d6] px-3 border-b-[3px] outline-none border-[#727834]"
                placeholder="Username"
                value={loginDetails.username}

              />
            </div>
            <div>
              <input
                value={loginDetails.password}
                onChange={handleInputChange}
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full h-10  bg-[#d6d6d6] px-3 border-b-[3px] outline-none border-[#727834]"
                placeholder="Password"
              />
              <div className="flex flex-row gap-2 mt-2">
                <input
                  type="checkbox"
                  name="showcheckbox"
                  id="showcheckbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                />
                <label htmlFor="" className="text-white text-[13px]">
                  Show Password
                </label>
              </div>
            </div>

            <div className="flex justify-center my-5">
              <button
                className="px-4 py-2 text-white bg-[#727834]"
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
