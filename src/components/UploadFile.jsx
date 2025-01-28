import iconUpload from '../assets/images/icon-upload.svg';
import { GoInfo } from "react-icons/go";
import { useState, useRef, useEffect } from 'react';

const UploadFile = ({setFileUpload}) => {
  const [uploadImage, setUploadImage] = useState({
    fileUpload: null,
    error: "",
    isError: false,
    isUploaded: false
  });
  const fileInputRef = useRef(null);


  const hanldeFileUpload = (e) => {
    const file = e.target.files[0];
    const maxSize = 500 * 1024; //500kb file size
    
    if (file) {
      if (!file.type.startsWith('image/')) {
        setUploadImage({ ...uploadImage, isError: true, error: "Only image files are allowed."});

      } else if (file.size > maxSize) {
        setUploadImage({ ...uploadImage, isError: true, error: "File too large. Please upload photo under 500kb."});
      }else {
        const imageFile = URL.createObjectURL(file)
        setUploadImage({ ...uploadImage, fileUpload: imageFile, isUploaded: true });
        setFileUpload(imageFile)
      }
    }
  }

   // Automatically focus the file input when the page loads
   useEffect(() => {
    fileInputRef.current.focus(); // Focus on the file input
  }, []);

    const removeImage = () => {
      // Clean up the object URL to avoid memory leaks
      if (uploadImage.fileUpload) {
        URL.revokeObjectURL(uploadImage.fileUpload);
      }
      setUploadImage({
        ...uploadImage, // Retain other properties
        fileUpload: null, // Clear the uploaded image
        isUploaded: false, // Mark as not uploaded
        error: "", // Reset any errors
        isError: false, // Clear error state
      });
  
    }
  
    const changeImage = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click(); // Manually trigger file input click
      }
    }

  return (
    <>
    <div className='relative w-full py-2'>
      <input 
        type='file'
        id='uploadAvatar' 
        ref={fileInputRef}
        className='hidden'
        accept="image/*" //restricts file types to images only
        onChange={hanldeFileUpload}
        
        />
      
        <label htmlFor='uploadAvatar'
        className="flex items-center justify-center w-full py-3 px-4 rounded-lg bg-gray-400/20 
        border border-dashed border-gray-500 cursor-pointer hover:bg-gray-400/40"
        tabIndex='0'
        >
        <div className='flex flex-col items-center pt-2'>
          <div className='flex w-12 h-12 bg-gray-400/30 rounded-lg border border-gray-400/60 items-center justify-center overflow-hidden'>
            <img src={!uploadImage.isUploaded ? iconUpload : uploadImage.fileUpload || iconUpload } className='size-12' />
          </div>

          {uploadImage.isUploaded ?
          (<div className='gap-2 flex flex-row py-3'>
          <button 
            onClick={removeImage}
            className='img-button underline '>Remove image</button>
            
          <button 
            onClick={changeImage}
            className='img-button'>Change image</button>
          </div> )
          :(
            <p className='py-3 text-xs text-gray-400'>Drag and drop or click to upload</p> 
          )}

        </div>
      </label>
    </div>
    <div className='flex flex-row text-neutral-300 pb-4'>
    <GoInfo className={`${uploadImage.isError && 'text-primary'}`} />

      {uploadImage.isError ? uploadImage.error && <span className='text-xs pl-2 text-primary'>{uploadImage.error}</span> :
      <span className='text-xs pl-2 font-inconsolata'>Upload your photo (JPG or PNG, max size: 500KB).</span>
    }
    </div>

    </>
  )
}

export default UploadFile