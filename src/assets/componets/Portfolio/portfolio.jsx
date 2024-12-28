import React from 'react'
import cabin from '../../images/cabin.png';
import cake from '../../images/cake.png';
import circus from '../../images/circus.png';
import game from '../../images/game.png';
import safe from '../../images/safe.png';
import submarine from '../../images/submarine.png';

export default function portfolio() {
  return (
    <>
    <div className="protfolio p-4 ">
        <div className="container">
            <div className="titles text-center mb-5 ">
                <h1 className='title text-uppercase'>Portfolio</h1>
            </div>
            <div className="up d-flex justify-content-center gap-3 mb-5 ">
                <img className='w-25 rounded'  src={cabin} />
                <img className='w-25 rounded'  src={cake} />
                <img className='w-25 rounded'  src={circus} />
           </div>


           <div className="down d-flex justify-content-center gap-3 ">
                <img className='w-25 rounded'  src={game} />
                <img className='w-25 rounded'  src={safe} />
                <img className='w-25 rounded'  src={submarine} />
           </div>
        </div>
    </div>
    
    </>
  )
}
