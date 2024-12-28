import React from 'react';
import avataaars from '../../images/avataaars.svg';



function Header() {
  return (
    <div className='bg-info vh-100 ' >
  
      <div className="info d-flex flex-column justify-content-center align-items-center gap-2 text-white   p-3">
        <img className='w-25 mt-5' src={avataaars}  />
        <h1 className='startboot  ' >Start Bootstrap</h1> 
        <h3>Graphic Artist - Web Designer - Illustrator</h3>
      </div>
      
   
    </div>
  );
}

export default Header;