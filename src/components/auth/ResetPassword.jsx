import React, { useState } from "react";
import styles from "../../style";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Transition } from "@headlessui/react";
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
import Home from "../Home";

export default function ResetPassword() {
  const [showModal, setShowModal] = React.useState(true);
  const [Error, setError] = useState();
  const {id} =useParams()
  const [ToastClose, setToastClose] = useState(false);
  const yupValidation = Yup.object().shape({
    userId:Yup.string().required("Please enter Your OTP."),
    otp: Yup.string().required("Please enter Your OTP.").min(4,"Must be 4 Number"),
    password: Yup.string().required("Please enter Your Email.").email(),
    
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  async function onSubmit(data) {
    try {
      const url = "http://localhost:5000/api/users/Reset";
      const { data: res } = await axios.post(url, data);

      window.location = `/login`;
    } catch (error) {
      setError(error.response.data.message);
      console.log(error.response.data.message);
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
    <Home/>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative  bg-dimWhite w-[70%] sm:p-5 p-3 rounded">
              {/*content*/}
              <div className="float-right mt-0 border-0">
                <button
                  className="text-black bg-transparent border-0 "
                  onClick={() => setShowModal(false)}
                >
                  <span className="block w-10 h-10 text-xl text-white bg-[#2a913f] rounded-full opacity-7">
                    x
                  </span>
                </button>
              </div>
              <div className="   bg-[#2a913f] w-[60%] justify-center text-center rounded mt-2">
                <h1 className="p-1  sm:text-2xl text-[15px]  text-center text-white">
                 Reset Password
                </h1>
              </div>
              <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-2">
                  <label
                    className="block text-sm font-semibold text-gray-800"
                  >
                   OTP Code
                  </label>
                  <input
                    name="otp"
                    type="text"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("otp")}
                  />
                  <div className="invalid-feedback">
                    {errors.otp?.message}
                  </div>
                </div>
              
                <div className="mb-2">
                  <label
                    className="block text-sm font-semibold text-gray-800"
                  >
                   New Password
                  </label>
                  <input
                    name="password"
                    type="text"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    {...register("password")}
                  />
                  <div className="invalid-feedback">
                    {errors.password?.message}
                  </div>
                  <input
                    name="userId"
                    type="hidden"
                    className={`form-control ${
                      errors.userId ? "is-invalid" : ""
                    }`}
                    {...register("userId")}
                    defaultValue={id}
                  />
                </div>
                
              
                
               

                <div className="mt-6">
                    <button type="submit" className="w-full px-4 py-2 text-[12px] sm:text-[17px] tracking-wide text-white transition-colors duration-200 transform bg-[#2a913f] rounded-md hover:bg-[#2a913f] focus:outline-none focus:bg-[#2a913f]">
                      Change Password
                    </button>
                  </div>
                
                <div className="flex justify-between">
                  <div className=" text-start">
                    <a
                      href="/Investor"
                      className={`${styles.paragraph} no-underline mt-5 `}
                    >
                      <span class="w-[15px] h-[15px] rounded-full mt-2  mr-1 inline-block bg-[#2a913f]"></span>{" "}
                      Investor
                    </a>
                  </div>
                  <div className="text-end">
                    <a
                      href="/referral"
                      className={`${styles.paragraph} no-underline mt-5 `}
                    >
                      <span class="w-[15px] h-[15px] rounded-full mt-2  mr-1 inline-block bg-[#2a913f]"></span>{" "}
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
              <TailwindToaster/>
            </div>
            {Error ? toast.error(Error):null}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
