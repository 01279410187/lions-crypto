// import React, { useState, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import CountryDropdown from "country-dropdown-with-flags-for-react";
// import FormInput from "./FormInput";
// // import PhoneNumber from './PhoneNumber';
// import { Link, Navigate, useNavigate } from "react-router-dom";
// import * as Yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm, Controller } from "react-hook-form";
// import axios from "axios";
// import styles from "../../style";
// import { Transition } from "@headlessui/react";
// import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
// import ReactFlagsSelect from "react-flags-select";

// // import "bootstrap/dist/css/bootstrap.min.css";

// const Register = () => {
//   const [Error, setError] = useState();
//   const [PhoneValue, setPhoneValue] = useState();
//   const [selected, setSelected] = useState("");

//   const yupValidation = Yup.object().shape({
//     first: Yup.string().required("Please enter first Name."),
//     last: Yup.string().required("Please enter last Name."),
//     email: Yup.string().required("Email id is Required").email(),
//     password: Yup.string().required("Enter Password is Required"),
//     passwordConfirm: Yup.string().oneOf(
//       [Yup.ref("password"), null],
//       "Passwords must match"
//     ),
//     phoneNumber: Yup.string().required("Enter birthDate is Required"),
//     // Country: Yup.string().required("Enter Country is Required"),
//     birthDate: Yup.string().required("Enter birthDate is Required"),
   
//     // otp: Yup.string().required("Enter otp is to Register").min(4,"Must Be 4 Number"),
//   });

//   const handleSelect = (country) => {
//     //  setValue("Country",country)
//     console.log("Country no ===>", country);
//   };
//   const formOptions = { resolver: yupResolver(yupValidation) };
//   const { register, handleSubmit, reset, setValue, control, formState } =
//     useForm(formOptions);
//   const { errors } = formState;

//   async function onSubmit(data) {
//     try {
//       const url = "http://localhost:5000/api/users/Register";
//       const { data: res } = await axios.post(url, data);
//       window.location = `/Verified/${res.data.id}`;
//       console.log(res.message);
//       console.log(res.user);
//       console.log(res.user.id);
//     } catch (error) {
//       setError(error.response.data.message);
//       console.log(error.response.data.message);
//     }
//   }
//   const handleChangePhone = (phone, country) => {
//     setValue("countryKey", country.countryCode);
//     setValue("countryCode", country.dialCode);

//     console.log("phone no ===>", phone, country);
//   };
//   const TailwindToaster = () => {
//     return (
//       <Toaster>
//         {(t) => (
//           <Transition
//             appear
//             show={t.visible}
//             className="flex p-4 transform bg-white rounded shadow-lg"
//             enter="transition-all duration-150"
//             enterFrom="opacity-0 scale-50"
//             enterTo="opacity-100 scale-100"
//             leave="transition-all duration-150"
//             leaveFrom="opacity-100 scale-100"
//             leaveTo="opacity-0 scale-75"
//           >
//             <ToastIcon toast={t} />
//             <p className="px-2">{resolveValue(t.message)}</p>
//           </Transition>
//         )}
//       </Toaster>
//     );
//   };

//   return (
//     <div className="container ">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <h2
//           className={`${styles.heading2} text-white text-[25px] sm:text-[40px] mt-5 bg-[#2a913f] rounded-lg  text-center`}
//         >
//           Create an Investor Account
//         </h2>

//         <div className="grid grid-cols-4 gap-2 ">
//           <div>
//             <p
//               className={`font-poppins text-[12px] whitespace-nowrap text-black  sm:text-[18px] mt-4 sm:mt-4`}
//             >
//               First Name:
//             </p>
//           </div>
//           <div className="mt-3 sm:mt-4 ">
//             <input
//               name="first"
//               type="text"
//               className={`form-control ${errors.first ? "is-invalid" : ""}`}
//               {...register("first")}
//             />
//             <div className="invalid-feedback">{errors.first?.message}</div>
//           </div>
//           <div>
//             <p
//               className={`font-poppins text-[12px] whitespace-nowrap text-black  sm:text-[18px] mt-4  sm:mt-4 `}
//             >
//               Last Name:
//             </p>
//           </div>
//           <div className="mt-3 sm:mt-4">
//             <input
//               name="last"
//               type="text"
//               className={`form-control ${errors.last ? "is-invalid" : ""}`}
//               {...register("last")}
//             />
//             <div className="invalid-feedback">{errors.last?.message}</div>
//           </div>
//         </div>

//         <div></div>

//         <div className="form-group">
//           <label>Email</label>
//           <input
//             name="email"
//             type="text"
//             className={`form-control ${errors.email ? "is-invalid" : ""}`}
//             {...register("email")}
//           />
//           <div className="invalid-feedback">{errors.email?.message}</div>
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             name="password"
//             type="text"
//             className={`form-control ${errors.password ? "is-invalid" : ""}`}
//             {...register("password")}
//           />
//           <div className="invalid-feedback">{errors.password?.message}</div>
//         </div>

//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             name="passwordConfirm"
//             type="text"
//             className={`form-control ${
//               errors.passwordConfirm ? "is-invalid" : ""
//             }`}
//             {...register("passwordConfirm")}
//           />
//           <div className="invalid-feedback">
//             {errors.passwordConfirm?.message}
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
         
//           <Controller
//             control={control}
//             name="phoneNumber"
//             rules={{ required: true }}
//             render={({ field: { ref, ...field } }) => (
//               <PhoneInput
//                 {...field}
//                 inputExtraProps={{
//                   ref,
//                   required: true,
//                   autoFocus: true,
//                 }}
//                 country={"eg"}
//                 countryCodeEditable={false}
//                 specialLabel={"Player Mobile Number"}
//               />
//             )}
//           />
//           <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
//         </div>
//         <div className="form-group">
//           <label>D.O.B</label>
//           <input
//             name="birthDate"
//             type="date"
//             className={`form-control ${errors.birthDate ? "is-invalid" : ""}`}
//             {...register("birthDate")}
//           />
//           <div className="invalid-feedback">{errors.birthDate?.message}</div>
//         </div>

//         <div className=" form-group">
//         <label>Country</label>
//         <Controller
//                 name="Country"
//                 control={control}
//                 render={({ field: { onChange, onBlur, value, ref } }) => (
//                   <ReactFlagsSelect
//                     value={value}
//                     onChange={onChange}
//                     onSelect={(code) => {
//                       onChange(code);
//                       setSelected(code);
//                     }}
//                     selected={selected}
//                   />
//                 )}
//               />

//           <div className="invalid-feedback">{errors.Country?.message}</div>
//         </div>

//         <div className="mt-3 text-center">
//           <button type="submit" className="bg-[#2a913f] w-[30%] rounded-md">
//             Submit
//           </button>
//         </div>

//         {/* <TailwindToaster />
//         {Error ? toast.error(Error) : null} */}
//       </form>
//       {/* <form>
//          <div className="mt-2 form-group">
//           <label>Enter Code</label>
//           <input
//             name="otp"
//             type="text"
//             className={`form-control ${errors.otp ? "is-invalid" : ""}`}
//             {...register("otp")}
//           />
//           <div className="invalid-feedback">{errors.otp?.message}</div>
//         </div>

//         <div className="mt-3 mt-20 text-center">
//           <button type="submit" className="bg-[#2a913f] w-[30%] rounded-md">
//             Done
//           </button>
//         </div>

//       </form> */}
//     </div>
//   );
// };

// export default Register;
