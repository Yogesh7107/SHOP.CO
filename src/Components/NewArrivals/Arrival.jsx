import { useState } from "react";
import "./Arrival.css";

function Arrival() {
  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 3,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 4,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 5,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 6,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 7,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 8,
      name: "Gradient Graphic T-shirt",
      image:
        "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage.png",
      rating: 4.5,
      price: 30,
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="arrival-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="arrival-heading">NEW ARRIVALS</h1>
          </div>
        </div>

        <div className="row ">
          {visibleProducts.map((item, index) => {
            const isFading = showAll && index >= 4; // sirf last ke cards fade-in honge
            return (
              <div
                className={`col-12 col-sm-6 col-xxl-3 fade-card ${isFading ? "fade-in" : ""}`}
                key={item.id}
              >
                <div className="card border-0 pb-4">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt="product"
                  />
                  <div className="card-body">
                    <h3 className="arrival-card-title">{item.name}</h3>
                    <div className="rating arrival-rating-digit">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      {item.rating}/ <span>5</span>
                    </div>
                    <h3 className="arrival-card-price">₹ {item.price}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="row mt-4">
            <div className="col-12">
              <div className="d-flex justify-content-center">
                <button
                  className="arrival-view-all-btn"
                  onClick={() => setShowAll(true)}
                >
                  View All
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Arrival;
