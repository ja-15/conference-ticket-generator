import {Routes, Route} from 'react-router-dom'

import FormPage from "./pages/FormPage";
import patternCircle from './assets/images/pattern-circle.svg';
import patternSquiggly from './assets/images/pattern-squiggly-line-bottom-desktop.svg';
import patternSquigglyMobile from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import patternSquigglyTop from './assets/images/pattern-squiggly-line-top.svg';
import logoFull from './assets/images/logo-full.svg';
import TicketPage from "./pages/TicketPage";




function App() {


  return (
   <div className='relative h-full flex overflow-hidden max-container'>
    <div className='flex flex-col items-center mx-auto text-center md:w-[40%] px-3'>
    <img src={logoFull} alt='logo' className='items-start size-32' />
    <img src={patternCircle} className='absolute md:-top-25 -top-10 md:left-0 -left-5 size-36 md:size-60' />
    <img src={patternSquiggly} className='absolute bottom-0 left-0 -z-10 max-md:hidden' />
    <img src={patternSquigglyMobile} className='absolute -bottom-16 left-0 size-80 -z-10 md:hidden' />
    <img src={patternSquigglyTop} className="absolute top-0 right-0 size-36 md:size-80" />
    <img src={patternCircle} className="absolute md:top-100 bottom-30 md:right-100 -right-20 -z-10 size-40" />

    <Routes>
      <Route path='' element={
        <FormPage />
      }
      />
      <Route path='ticket' element={
        <TicketPage />
      }/>
      
    </Routes>
    </div>
    
   </div>
  )
}

export default App
