import React from 'react'

export default function Contact() {
  return (
   <>
   <div className="contact p-5 ">
            <div className="container">
                <div className="titles text-center mb-5 ">
                    <h1 className='title text-uppercase'>about</h1>
                </div>
                <div className="input d-flex flex-column gap-5 mb-4">
                    <input className='w-100 p-3 fullName' type="text" placeholder='FULL NAME' />
                    <input className='w-100 p-3 email' type="email" placeholder='EMAIL' />
                    <input className='phone w-100 p-3' type="text"   placeholder='PHONE NUMBER' />
                    <input className='message w-100 p-3' type="text"   placeholder='MESSAGE' />

                </div>
                <button type="button" class="btn btn-success">Send</button>      
            </div>
        </div>

   </>
  )
}
