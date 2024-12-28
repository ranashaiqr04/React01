import React from 'react'

export default function footer() {
  return (
    <>
    <div className="footers bg-secondary p-4 h-50">
        <div className="container">
            <div className="footer d-flex  justify-content-around">
                <div className="location text-center text-white">
                    <h3 className='text-uppercase '>Location</h3>
                    <p>2215 John Daniel Drivebr 
                    Clark, MO 65243
                    </p>

                </div>
                <div className="Around">
                <h3 className='text-uppercase text-white'>Around the Web</h3>

                </div>
                <div className="Freelancer text-white" >
                <h3 className='text-uppercase '>About Freelancer</h3>
                <p >
                Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="">Start Bootstrap </a>.
                </p>

                </div>

            </div>
        </div>
    </div>
    </>
  )
}
