import React from 'react';

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] text-white  border-l-transparent border-r-transparent'>
    <div className='container p-12 flex justify-between'>
        <span>LOGO</span>
        <p className='text-slate-600' >  &copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
    </div>
    </footer>
  )
}

export default Footer;