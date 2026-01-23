import React from "react";
import './Carousal.css'


function Carousal() {
  return (
    <div>
 
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  
  <div className="carousel-inner" id="carousal">
    
    <div className="carousel-caption d-none d-md-block" style={{zIndex:"2"}}>
     <form className="form-inline">
     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form> 
    </div>
    <div className="carousel-item active">
      <img src="https://tse4.mm.bing.net/th/id/OIP.0v0WSI9bszvLAmV1lus4-wHaDt?pid=Api&P=0&h=180" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src="https://tse2.mm.bing.net/th/id/OIP.t57OzeATZKjBDDrzXqbc5gHaE7?pid=Api&P=0&h=180" className="d-block w-100" alt="..."/>
      
    </div>
    <div className="carousel-item">
      <img src="https://tse1.mm.bing.net/th/id/OIP.34Z6gFMwS_yJXibzdVQuUgHaEV?pid=Api&P=0&h=180" className="d-block w-100" alt="..."/>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </div>
  );
}

export default Carousal;
