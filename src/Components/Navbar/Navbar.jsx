import "./Navbar.css";

function Navbar() {
  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg text-nowrap">
          <div className="container position-relative">
            <a className="navbar-brand navbar-title" href="#">
              SHOP.CO
            </a>

            <div className="d-flex align-items-center gap-3 fs-4 d-lg-none me-2 small-sizes-position">
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-circle-user"></i>
            </div>

            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="d-none d-lg-flex align-items-center gap-4 ms-5">
              <ul className="navbar-nav d-flex align-items-center gap-4 mb-0">
                <li className="nav-item">
                  <div className="d-flex align-items-center">
                    <a className="nav-link navbar-items" href="#">
                      Shop
                    </a>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar-items" href="#">
                    On Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar-items" href="#">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link navbar-items" href="#">
                    Brands
                  </a>
                </li>
                <div className="search-box">
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search for products..."
                  />
                </div>
              </ul>
            </div>

            <div className="d-none d-lg-flex align-items-center gap-2 fs-4">
              <i className="fa-solid fa-cart-shopping"></i>
              <i className="fa-solid fa-circle-user"></i>
            </div>
          </div>
        </nav>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              SHOP.CO
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav gap-3">
              <li className="nav-item">
                <a className="nav-link navbar-items" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-items" href="#">
                  On Sale
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-items" href="#">
                  New Arrivals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link navbar-items" href="#">
                  Brands
                </a>
              </li>
              <div className="search-box mt-3">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for products..."
                />
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
