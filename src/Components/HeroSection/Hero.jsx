import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero-wrapper ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-sm-flex justify-content-sm-center ">
                <div className="d-flex flex-column   hero-main-div">
                  <div className="d-flex justify-content-center flex-column position-relative">
                    <h1 className="hero-heading">
                      FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    {/* <img
                      src="../../../public/WhatsApp_Image_2025-08-13_at_2.54.32_PM-removebg-preview.png"
                      className="img-fluid d-none d-lg-block start-1st-img"
                      alt="start-logo"
                    /> */}
                    <img
                      className="img-fluid d-none d-lg-block start-1st-img"
                      src={`${
                        import.meta.env.BASE_URL
                      }WhatsApp_Image_2025-08-13_at_2.54.32_PM-removebg-preview.png`}
                      alt="Preview"
                    />

                    <div className="position-relative hero-para-wrapper">
                      {/* <img
                        src="../../../public/WhatsApp_Image_2025-08-13_at_2.54.32_PM-removebg-preview.png"
                        className="img-fluid hero-para-img-outer d-none d-lg-block"
                        alt="start-logo"
                      /> */}
                      <img
                        className="img-fluid hero-para-img-outer d-none d-lg-block"
                        src={`${
                          import.meta.env.BASE_URL
                        }WhatsApp_Image_2025-08-13_at_2.54.32_PM-removebg-preview.png`}
                        alt="Preview"
                      />
                      <p className="hero-para mb-0">
                        Browse through our diverse range of meticulously crafted
                        garments, designed to bring out your individuality and
                        cater to your sense of style.
                      </p>
                    </div>
                  </div>

                  <div className="">
                    <button className="hero-shop-now-btn">Shop Now</button>
                  </div>

                  <div className="d-flex flex-wrap hero-count-main">
                    <div className="hero-count-first-main-div">
                      <h1 className="hero-count-digit">200+</h1>
                      <p className="hero-count-desc mb-0">
                        International Brands
                      </p>
                    </div>
                    <div className="hero-count-border-div hero-count-first-main-div">
                      <h1 className="hero-count-digit">2000+</h1>
                      <p className="hero-count-desc mb-0">
                        High-Quality Products
                      </p>
                    </div>
                    <div className="hero-count-border-div hero-count-last-div">
                      <h1 className="hero-count-digit">30,000+</h1>
                      <p className="hero-count-desc mb-0 ">Happy Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
