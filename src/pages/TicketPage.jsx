import { useState, useEffect } from 'react';
import patternTicket from '../assets/images/pattern-ticket.svg';
import logoFull from '../assets/images/logo-full.svg';
import iconGithub from '../assets/images/icon-github.svg';
import { useLocation } from 'react-router-dom';

const TicketPage = () => {
  const [ticket, setTicket] = useState(null);

  const location = useLocation();
  const {email, name, fileUpload, username} = location.state || {};

  const date = new Date();
  const todaysDate = date.toDateString().split(' ')[1] + ' ' + date.toDateString().split(' ')[2] + ', ' + date.toDateString().split(' ')[3];
  

  useEffect(() => {
    // Check if there's already a ticket number in localStorage
    const storedEmail = localStorage.getItem('email');
    const storedTicket = localStorage.getItem('ticketNumber');
    
    if (storedEmail !== email) {
      // If no ticket number exists, generate one and store it in localStorage
      const newTicket = Math.floor(Math.random() * 50000);
      localStorage.setItem('ticketNumber', newTicket);
      localStorage.setItem('email', email); // Store the new name
      setTicket(newTicket);
    } else {
      // If there's already a ticket number in localStorage, use it
      setTicket(storedTicket);
    }
  }, [email]);

  return (
    <div className=''>
      <h1 className='text-4xl font-bold text-white'>Congrats, <span 
        className='bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)] bg-clip-text text-transparent'>{name}! </span>
      Your ticket is ready. 
      </h1>
      <div className='md:w-[70%] place-self-center'>
      <p className='text-white text-sm mt-8 '>We've emailed your ticket to <span 
      className='text-primary'>{email} </span>
        and will send updates in the run up to the event.</p>

      {/* ticket */}
        <div className='relative mt-20 mb-80 flex flex-none'>
          <img src={patternTicket} />
          <img className='absolute top-4 left-4' src={logoFull} />
          <span className='absolute text-white text-xs top-12 left-16'>{`${todaysDate} / Austin, TX`}</span>

          <div>
            <div className='flex-none absolute bottom-4 left-4 flex w-12 h-12 bg-gray-400/30 rounded-lg items-center justify-center overflow-hidden'>
              <img src={fileUpload} />
            </div>
            <p className='absolute bottom-10 left-18 text-sm text-white'>{name}</p>

            {/* details */}
            <div>
            <img src={iconGithub} className='absolute bottom-5.5 left-18 size-5'/>
            <p className='absolute bottom-6 left-24 text-xs text-white'>{username}</p>
            </div>

            <div className='absolute [writing-mode:vertical-rl] text-gray-400 font-semibold right-6 top-16'>
              #{ticket}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TicketPage