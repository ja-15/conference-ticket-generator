
import logoFull from '../assets/images/logo-full.svg';

import UploadFile from '../components/UploadFile';



const FormPage = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
  }




  return (
    <div className='flex flex-col items-center mx-auto text-center md:w-[40%] px-3'>
      <img src={logoFull} alt='logo' className='items-start size-32' />
      <h1 className='text-4xl font-bold text-white'>
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className='py-6 text-neutral-300' >
        Secure your spot at next year's biggest coding conference.
      </p>
      <form 
        onSubmit={handleSubmit}
        className='text-gray-300 text-start md:w-[70%] mb-30'>
        <label className='text-sm text-neutral-300'>Upload Avatar</label>
          
        <UploadFile />
          
        <label className='text-sm'>Full Name</label>
        <input type='text'
          className='input-text' />

        <label className='text-sm'>Email Address</label>
        <input type='email'
          className='input-text'
          placeholder='example@email.com' />

        <label className='text-sm'>GitHub Username</label>
        <input type='text'
          className='input-text'
          placeholder='@yourusername' />

        <button 
          
          className='w-full bg-primary text-black font-semibold py-1.5 text-lg rounded-lg 
          cursor-pointer hover:bg-secondary mt-2'>
          Generate My Ticket</button>


      </form>

      </div>
  )
}

export default FormPage