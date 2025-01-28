import React, { useState, useEffect } from 'react';

import UploadFile from '../components/UploadFile';
import { GoInfo } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


const FormPage = () => {
  const [fileUpload, setFileUpload] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!email) {
      setIsError(true);
      setError("Please enter a valid email address.");

    } else if (isError === true) {
      return
    } 
    else {
      setIsError(false);
      setError("");
      navigate('/ticket', {state: {email, name, fileUpload, username}})
    }
  }

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail === email) {
      setError('Email already registered')
      setIsError(true)
    }else {
      setError('')
      setIsError(false)
    }
  }, [email])
  



  return (
    <>
      <h1 className='md:text-4xl text-3xl font-bold text-white'>
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className='py-6 text-neutral-300' >
        Secure your spot at next year's biggest coding conference.
      </p>
      <form 
        onSubmit={handleSubmit}
        className='text-gray-300 text-start md:w-[70%] mb-30'>
        <label className='text-sm text-neutral-300'>Upload Avatar</label>
          
        <UploadFile
         setFileUpload={setFileUpload}/>
          
        <label className='text-sm '>Full Name</label>
        <input type='text'
          value={name}
          placeholder='Enter your full name'
          onChange={(e) => setName(e.target.value)}
          className='input-text mb-3' />

        <label className='text-sm'>Email Address</label>
        <input type='email'
          className='input-text mb-1.5'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='example@email.com' />

          <div className='flex'>
          <GoInfo className={`${isError ? 'mb-2 text-primary' : 'hidden'}`} />
          {error && ( <span className='text-primary text-xs pl-2 font-inconsolata'>{error}</span>) }
          </div>

        <div className='mt-3'>
        <label className='text-sm'>GitHub Username</label>
        <input type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input-text mb-4'
          placeholder='@yourusername' />
          </div>

        <button 
          
          className='w-full bg-primary text-black font-semibold py-1.5 text-lg rounded-lg 
          cursor-pointer hover:bg-secondary mt-2'>
          Generate My Ticket</button>


      </form>
      </>
      
  )
}

export default FormPage