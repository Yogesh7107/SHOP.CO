import './Selling.css';

function Selling() {
  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 2,
      name: "Gradient Graphic T-shirt",
      image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 3,
      name: "Gradient Graphic T-shirt",
      image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
      rating: 4.5,
      price: 30,
    },
    {
      id: 4,
      name: "Gradient Graphic T-shirt",
      image: "https://test-task-mcg.vercel.app/static/Images/Landing/ClothImage1.png",
      rating: 4.5,
      price: 30,
    }
  ];

  return (
    <section className="arrival-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="arrival-heading">TOP SELLING</h1>
          </div>
        </div>

        <div className="row">
          {products.map((item) => (
            <div className="col-12 col-sm-6 col-xxl-3" key={item.id}>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Selling;
