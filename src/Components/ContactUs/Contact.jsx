import "./Contact.css";

function Contact() {
  return (
    <>
      <section className="contact-wrapper">
        <div className="container contact-container">
          <div className="row">
            <div className="col-12  col-sm-6 d-flex align-items-center">
              <div className="">
                <h1 className="contact-heading">
                  STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h1>
              </div>
            </div>

            <div className="col-12 col-sm-6">
              <div className="d-flex flex-column align-items-end contact-desc">
                <div className="input-with-icon">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <h4 className="contact-notification-text">
                    Send Us For Notification
                  </h4>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
