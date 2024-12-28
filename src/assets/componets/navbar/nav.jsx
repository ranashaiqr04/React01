import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-secondary text-uppercase ">
   <div class="container">
    <a class="navbar-brand text-white fs-3" href="#">START BOOTSTRAP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 ">
        <li class="nav-item ">
          <a class="nav-link text-white  fs-5"  aria-current="page" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white fs-5" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white fs-5">Contact Me
          </a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
    
  
  );
}
