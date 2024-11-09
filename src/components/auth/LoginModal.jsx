import React, { useState } from "react";
import styles from "../../style";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
import Home from "../Home";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(true);
  const [Error, setError] = useState();
  const [ToastClose, setToastClose] = useState(false);

  // const yupValidation = Yup.object().shape({
  //   phoneNumber: Yup.string().required("Please enter PhoneNumber some value."),
  //   password: Yup.string().required("Enter valid password"),
  // });

  // const formOptions = { resolver: yupResolver(yupValidation) };
  // const { register, handleSubmit, reset, formState } = useForm(formOptions);
  // const { errors } = formState || {}; // Ensure formState is not null

  async function onSubmit(data) {
    try {
      const url = "http://localhost:5000/api/users/login";
      const { data: res } = await axios.post(url, data);
      window.location = "/Investor";
      localStorage.setItem("token", res.token);
      console.log(res.message);
      console.log(res.token);
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred"); // Handle cases where error response may be undefined
      console.log(error.response?.data?.message);
    }
  }

  const TailwindToaster = () => {
    return (
      <Toaster>
        {(t) => (
          <Transition
            appear
            show={t.visible}
            className="flex p-4 transform bg-white rounded shadow-lg"
            enter="transition-all duration-150"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-150"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
            <ToastIcon toast={t} />
            <p className="px-2">{resolveValue(t.message)}</p>
          </Transition>
        )}
      </Toaster>
    );
  };

  return (
    <>
      <Home />
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative my-6 bg-dimWhite w-[70%] sm:p-5 p-3 rounded">
              {/* content */}
              <div className="float-right mt-0 border-0">
                <button
                  className="text-black bg-transparent border-0"
                  onClick={() => setShowModal(false)}
                >
                  <span className="block w-10 h-10 text-xl text-white bg-[#2a913f] rounded-full opacity-7">
                    x
                  </span>
                </button>
              </div>
              <div className="bg-[#2a913f] w-[30%] justify-center text-center rounded mt-2">
                <h1 className="p-1 sm:text-2xl text-[15px] whitespace-nowrap font-semibold text-center text-white">
                  Sign In
                </h1>
              </div>
              <form className="mt-6" >
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Phone Number
                  </label>
                  <input
                    name="phoneNumber"
                    type="text"
                    className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 `}
                    // {...register("phoneNumber")}
                  />
                  <div className="invalid-feedback">
                    {/* {errors.phoneNumber?.message} */}
                  </div>
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-semibold text-gray-800">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className={`form-control `}
                    // {...register("password")}
                  />
                  <div className="invalid-feedback">
                    {/* {errors.password?.message} */}
                  </div>
                </div>
                <div className="flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Remember Me!
                  </label>
                </div>
                <Link
                  to="/forgetPassword"
                  className="text-[#2a913f] text-[18px] no-underline mt-1"
                >
                  Forget Your Password
                </Link>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-[12px] sm:text-[17px] tracking-wide text-white transition-colors duration-200 transform bg-[#2a913f] rounded-md hover:bg-[#2a913f] focus:outline-none focus:bg-[#2a913f]"
                  >
                    Log In
                  </button>
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 text-[12px] sm:text-[17px] tracking-wide text-white transition-colors duration-200 transform bg-[#2a913f] rounded-md hover:bg-[#2a913f] focus:outline-none focus:bg-[#2a913f]">
                    Create A New Account
                  </button>
                </div>
                <div className="flex justify-between">
                  <div className="text-start">
                    <a
                      href="/Investor"
                      className={`${styles.paragraph} no-underline mt-5`}
                    >
                      <span className="w-[15px] h-[15px] rounded-full mt-2 mr-1 inline-block bg-[#2a913f]"></span>{" "}
                      Investor
                    </a>
                  </div>
                  <div className="text-end">
                    <a
                      href="/referral"
                      className={`${styles.paragraph} no-underline mt-5`}
                    >
                      <span className="w-[15px] h-[15px] rounded-full mt-2 mr-1 inline-block bg-[#2a913f]"></span>{" "}
                      Referral
                    </a>
                  </div>
                </div>
              </form>

              <Link
                to="/home"
                className="text-[#2a913f] mt-8 text-[18px] text-center no-underline"
              >
                TAKE A TOUR
              </Link>
              <TailwindToaster />
            </div>
            {Error ? toast.error(Error) : null}
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
}
