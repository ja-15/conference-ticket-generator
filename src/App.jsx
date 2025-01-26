import FormPage from "./pages/FormPage";
import patternCircle from './assets/images/pattern-circle.svg';
import patternSquiggly from './assets/images/pattern-squiggly-line-bottom-desktop.svg';
import patternSquigglyMobile from './assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import patternSquigglyTop from './assets/images/pattern-squiggly-line-top.svg';



function App() {


  return (
   <div className='relative max-container min-container h-full'>
    <img src={patternCircle} className='absolute -top-25 left-0 ' />
    <img src={patternSquiggly} className='absolute bottom-0 left-0 -z-10' />
    <img src={patternSquigglyMobile} className='absolute bottom-0 left-0 -z-10 md:hidden' />
    <img src={patternSquigglyTop} className="absolute top-10 right-0" />
    <img src={patternCircle} className="absolute top-100 right-80 -z-10" />
    <FormPage />
   </div>
  )
}

export default App
