import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Customer.css";

function Customer() {
  return (
    <section className="customer-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="customer-heading">OUR HAPPY CUSTOMERS</h1>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-12">
            <div className="card customer-card">
              <div className="custom-prev">❮</div>
              <div className="custom-next">❯</div>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                loop={true}
                slidesPerView={1}
                className="customer-swiper"
              >
                <SwiperSlide>
                  <div className="customer-content">
                   <p className="slider-para">
                     Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts
                    </p>
                    <h5 className="slider-user-name">John Smith</h5>
                   <small className="slider-post">Senior HR Manager at Zendesk</small>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="customer-content">
                    <p className="slider-para">
                     Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts
                    </p>
                    <h5 className="slider-user-name">John Smith</h5>
                    <small className="slider-post">Senior HR Manager at Zendesk</small>
                  </div>
                </SwiperSlide>
                  <SwiperSlide>
                  <div className="customer-content">
                    <p className="slider-para">
                     Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts
                    </p>
                    <h5 className="slider-user-name">John Smith</h5>
                    <small className="slider-post">Senior HR Manager at Zendesk</small>
                  </div>
                </SwiperSlide>  <SwiperSlide>
                  <div className="customer-content">
                    <p className="slider-para">
                     Our experience with your service has been exceptional. The platform provided us with a seamless hiring process, from posting job openings to finding the perfect candidate. The user-friendly interface made it easy for our team to collaborate, review applications, and schedule interviews. Thanks to your service, we were able to hire a highly qualified candidate within a short timeframe. It has become an invaluable tool for our recruitment efforts
                    </p>
                    <h5 className="slider-user-name">John Smith</h5>
                    <small className="slider-post">Senior HR Manager at Zendesk</small>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
