import logoFull from '../assets/images/logo-full.svg';
import iconUpload from '../assets/images/icon-upload.svg';

const FormPage = () => {
  return (
    <div className='flex flex-col items-center mx-auto text-center w-[40%]'>
      <img src={logoFull} alt='logo' className='items-start size-32' />
      <h1 className='text-4xl font-bold text-white'>
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <p className='py-4 text-gray-300' >
        Secure your spot at next year's biggest coding conference.
      </p>
      <form className='text-gray-300 text-start w-[70%]'>
          <label className='text-sm'>Upload Avatar</label>
          <div className='relative w-full pt-1'>
            <input type='file'
              id='uploadAvatar' 
              className='hidden'
              />
              <label htmlFor='uploadAvatar'
             className="flex items-center justify-center w-full py-2 px-4 rounded-lg bg-gray-400/20 border border-dashed border-gray-500 cursor-pointer hover:bg-gray-400/50"
             >
              <div className='flex flex-col items-center pt-2'>
                <div className='bg-gray-400/30 rounded-lg p-1.5'>
                  <img src={iconUpload} />
                </div>
                  <p className='py-3 text-xs text-gray-300'>Drag and drop or click to upload</p>
              </div>
            </label>
          </div>
          
      </form>

      </div>
  )
}

export default FormPage