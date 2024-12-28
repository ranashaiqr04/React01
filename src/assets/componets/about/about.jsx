import React from 'react'

export default function about() {
  return (
    <>
     <div className="protfolio p-4 bg-info vh-50 text-white   ">
            <div className="container">
                <div className="titles text-center mb-5 ">
                    <h1 className='title text-uppercase'>about</h1>
                </div>

                <div className="information d-flex gap-3 justify-content-center">

                     <div className="left w-50">
                        <p className='fs-4'>
                            Freelancer is a free bootstrap theme 
                            created by Start Bootstrap. The download includes
                             the complete source files including HTML, CSS,
                             and JavaScript as well as optional SASS stylesheets for easy customization.
                        </p>
                    </div>
                    <div className="right w-50">
                        <p className='fs-4'>
                        You can create your own custom avatar 
                        for the masthead, change the icon in the dividers, 
                        and add your email address to the contact form to make
                         it fully functional!
                        </p>
                    </div>

                </div>
                <div className="button d-flex justify-content-center">
                      <button type="button" class="btn btn-outline-light w-25 h-25 mt-4">Free Download</button>
                </div>
              
         
               
            </div>
        </div>
    </>
  )
}
