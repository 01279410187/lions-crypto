import React,{useState,useEffect} from 'react'
import PhoneInput from 'react-phone-input-2';
import './app.css'
import FormInput from './FormInput';
// import PhoneNumber from './PhoneNumber';
import { Link, Navigate, useNavigate } from "react-router-dom";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Snackbar from '@mui/material/Snackbar';

import { useForm } from 'react-hook-form'
import axios from "axios";

// import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
     const [Error, setError] = useState()
      const yupValidation = Yup.object().shape({
        
        phoneNumber: Yup.string()
          .required('Please enter some value.')
          ,
        password: Yup.string().required('Email id is mendatory'),
      })
      const formOptions = { resolver: yupResolver(yupValidation) }
      const { register, handleSubmit, reset, formState } = useForm(formOptions)
      const { errors } = formState
    async  function onSubmit(data) {
        
        try {
          const url = "http://localhost:5000/api/users/login";
          const { data: res } = await axios.post(url, data);
         window.location='/Investor'
         localStorage.setItem("token" ,res.token)
         console.log(res.message);
         console.log(res.token);
        } catch (error) {
         
            setError(error.response.data.message);
            console.log(error.response.data.message)
          }
        }
      
    
     
      
    
      
    
      const handleSubmi = async (e) => {
        e.preventDefault();
        try {
          const url = "http://localhost:5000/api/users/login";
          const { data: res } = await axios.post(url, formState);
          Navigate("/login");
          localStorage.setItem("token" ,res.token)
          console.log(res.message);
          console.log(res.token);
        } catch (error) {
          if (
            error.res &&
            error.res.status >= 400 &&
            error.res.status <= 500
          ) {
            setError(error.res.message);
          }
        }
      };

   
  return (
    <div className="app">

     <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            name="phoneNumber"
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register('phoneNumber')}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="password"
            type="text"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('password')}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-primary" >
            Send
          </button>
        </div>
      </form>
   
  </div>
  )
}

export default Login