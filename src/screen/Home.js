import React, { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/Footer";
import Card from "../component/Card";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || "https://getgoodmernbackend-1.onrender.com";
      const response = await fetch(`${apiUrl}/dis/foodData`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setFoodCat(data[0]);
      setFoodItem(data[1]);
    } catch (error) {
      console.error("Error loading food data:", error);
      // Set empty arrays on error to prevent crashes
      setFoodCat([]);
      setFoodItem([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <NavBar />

      {/* Carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousal">
          <div
            className="carousel-caption d-none d-md-block"
            style={{ zIndex: "2" }}
          >
            <div className="form-inline d-flex justify-content-center">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="carousel-item active">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.0v0WSI9bszvLAmV1lus4-wHaDt?pid=Api&P=0&h=180"
              className="d-block w-100"
              alt="food"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://tse2.mm.bing.net/th/id/OIP.t57OzeATZKjBDDrzXqbc5gHaE7?pid=Api&P=0&h=180"
              className="d-block w-100"
              alt="food"
            />
          </div>

          <div className="carousel-item">
            <img
              src="https://tse1.mm.bing.net/th/id/OIP.34Z6gFMwS_yJXibzdVQuUgHaEV?pid=Api&P=0&h=180"
              className="d-block w-100"
              alt="food"
            />
          </div>
        </div>
      </div>

      {/* Food Section */}
      <div className="container">
        {foodCat.length > 0 &&
          foodCat.map((data) => (
            <div key={data._id} className="row mb-3">
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />

              {foodItem.length > 0 &&
                foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                  )
                  .map((filterItem) => (
                    <div
                      key={filterItem._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Card
                        foodName={filterItem.name}
                        options={filterItem.options[0]}
                        imgSrc={filterItem.img}
                      />
                    </div>
                  ))}
            </div>
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
