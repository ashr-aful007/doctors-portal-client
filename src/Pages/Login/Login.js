import React from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


function Login() {
  const { register, handleSubmit } = useForm();
  
  const handleLogin = data =>{
        console.log(data);
  }

  return (
    <div className='h-[800px] flex justify-center items-center'>
        <div className='w-96 p-7'>
           <h2 className='text-xl text-center font-semibold'>Login</h2>
           <form onSubmit={handleSubmit(handleLogin)}>
      <div>
         <label className='label'><span className='label-text'>Email</span></label>        
         <input type='text' {...register("email")} className='input input-bordered w-full max-w-xs'/>
      </div>
      <div>
         <label className='label'><span className='label-text'>Password</span></label>        
         <input type='password' {...register("Password")} className='input input-bordered w-full max-w-xs'/>
         <label className='label'><span className='label-text'>porget Password</span></label> 
      </div>
      <input className='btn btn-accent w-full' value="Login" type="submit" />
    </form>
    <p className=''>New to Doctors Portal<Link className='text-secondary' to="/signup">Create new account!</Link></p>
      <div className="divider">OR</div>
      <button className='btn btn-outline w-full'>COUNTINUE WITH GOOGLE</button>
        </div>
    </div>
  )
}

export default Login