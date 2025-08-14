import "./Footer.css";
function Footer() {
  return (
    <>
      <section className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-6">
            <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="">
                <h1 className="footer-heading">SHOP.CO</h1>
                <p className="footer-para">
                  We have clothes that suits your style and which you’re proud
                  to wear. From women to men.
                </p>
              <div className="d-flex gap-3 fs-3">
                  <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
              </div>
            </div>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-center ul-li-main-div ">
                <ul className="list-unstyled">
                  <li className="footer-main-li">HELP</li>
                  <li className="footer-li">Privacy statement</li>
                  <li className="footer-li pt-2">Terms & Conditions</li>
                  <li className="footer-li pt-2">Cookie Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
