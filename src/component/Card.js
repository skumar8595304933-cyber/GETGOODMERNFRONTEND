import React from "react";

function Card(props) {

  const options = props.options || {};
  const priceOptions = Object.keys(options);

  return (
    <div>
      <div className="card mt-4" style={{ width: "18rem", maxHeight: "360px" }}>
        <img className="card-img-top" src={props.imgSrc} alt={props.foodName || "Food item"} style={{ height: "150px", objectFit: "cover" }}
 />
 
        <div className="card-body">
          <h5 className="card-title">{props.foodName}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur..
          </p>

          <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i} value={1 + i}>
                    {1 + i}
                  </option>
                );
              })}
            </select>

            <select className="m-2 bg-success rounded">
             {
              priceOptions.map((data)=>{
                return <option key={data} value={data}>{data}</option>
              })
             }
            </select>

            <div className="d-inline h-100 fs-5">Total_Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
