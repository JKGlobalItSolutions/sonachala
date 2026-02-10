import logo from "../assets/Navbar/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);
  const timeoutRef = useRef(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setShowSolutions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // SCROLL DETECTION FOR SHOW/HIDE
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollThreshold = 10; // Minimum scroll distance to trigger hide/show

          if (Math.abs(currentScrollY - lastScrollY) > scrollThreshold) {
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
              // Scrolling down and past initial position
              setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
              // Scrolling up
              setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className="position-fixed w-100"
      style={{
        top: 0,
        zIndex: 1030,
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out"
      }}
    >
      {/* TOP BAR */}
     <nav
        className="navbar"
        style={{ backgroundColor: "#1f3d34", padding: "10px 0", justifyContent: "space-between"}}
      >
        <div className="d-flex align-items-center">
          <img
            src={logo}
            alt="logo"
            style={{ height: "38px", marginRight: "10px", }}
          />

          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "1"
            }}
          >
            SONACHALA
          </span>
        </div>

        <div className="d-flex align-items-center">
          <span
            style={{
              color: "#fff",
              fontWeight: 600,
              fontSize: "16px",
              paddingRight: "10px"
            }}
          >
            Contact Us 8608601049
          </span>
        </div>
      </nav>


      {/* MENU BAR */}
      <nav className="navbar navbar-expand-md bg-white border-bottom">
        <div className="container justify-content-center">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link>
            </li>
<li className="nav-item">
              <Link className="nav-link text-dark" to="/reseller">Reseller</Link>
            </li>

            

            {/* SOLUTIONS */}
            <li
              className="nav-item"
              onMouseEnter={() => {
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                  timeoutRef.current = null;
                }
                setShowSolutions(true);
              }}
              onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => {
                  setShowSolutions(false);
                }, 200);
              }}
            >
              <span
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                  }
                  setShowSolutions(!showSolutions);
                }}
              >
                Solutions ▾
              </span>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/pricing">Pricing</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* MEGA DROPDOWN */}
      {showSolutions && (
        <div
          ref={menuRef}
          className="position-absolute bg-white shadow"
          style={{
            top: "100%",
            left: 0,
            width: "100%",
            zIndex: 1000,
            borderBottom: "3px solid #6aa400",
            padding: "20px 0",
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
              timeoutRef.current = null;
            }
            setShowSolutions(true);
          }}
          onMouseLeave={() => {
            timeoutRef.current = setTimeout(() => {
              setShowSolutions(false);
            }, 200);
          }}
        >
          <div className="container">
            <div className="row">

              {/* OTA COLUMN */}
              <div className="col-md-4">
                <h5 style={{ fontWeight: 600, marginBottom: "10px" }}>
                  <span style={{ marginRight: "8px" }}>⚙️</span>OTA
                </h5>
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "#007bff",
                    marginBottom: "15px",
                  }}
                ></div>
                <ul className="list-unstyled">
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/Ota"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Sonachala
                    </Link>
                  </li>
                </ul>
              </div>


              {/* PRODUCTS COLUMN */}
              <div className="col-md-4">
                <h5 style={{ fontWeight: 600, marginBottom: "10px" }}>
                  <span style={{ marginRight: "8px" }}>📦</span>Products
                </h5>
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "#007bff",
                    marginBottom: "15px",
                  }}
                ></div>
                <ul className="list-unstyled">
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/channel_manager"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Channel Manager
                    </Link>
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/Pms"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>PMS
                    </Link>
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/Pos"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>POS
                    </Link>
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/BookingEngine"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Booking Engine
                    </Link>
                  </li>
                  <li style={{ padding: "8px 0" }}>
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/WebsiteBuilder"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Website Builder
                    </Link>
                  </li>
                </ul>
              </div>

              {/* SERVICES COLUMN */}
              <div className="col-md-4">
                <h5 style={{ fontWeight: 600, marginBottom: "10px" }}>
                  <span style={{ marginRight: "8px" }}>⚙️</span>Services
                </h5>
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "#007bff",
                    marginBottom: "15px",
                  }}
                ></div>
                <ul className="list-unstyled">
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/Ota"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>OTA Listing
                    </Link>
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/Revenue"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Revenue Management
                    </Link>
                  </li>
                  <li style={{ padding: "8px 0" }}>
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/B2b"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Stay B2B
                    </Link>
                  </li>
                </ul>
              </div>

              {/* INTEGRATIONS COLUMN */}
              <div className="col-md-4">
                <h5 style={{ fontWeight: 600, marginBottom: "10px" }}>
                  <span style={{ marginRight: "8px" }}>🔗</span>Integrations
                </h5>
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "#007bff",
                    marginBottom: "15px",
                  }}
                ></div>
                <ul className="list-unstyled">
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/API"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>PMS (APIs for PMS)
                    </Link>
                  </li>
                  <li
                    style={{
                      padding: "8px 0",
                      borderBottom: "1px solid #e9ecef",
                    }}
                  >
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/paymentgateway"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Payment Gateways
                    </Link>
                  </li>
                  <li style={{ padding: "8px 0" }}>
                    <Link
                      className="text-dark text-decoration-none d-flex align-items-center"
                      to="/Googleads"
                      style={{ fontSize: "14px" }}
                      onClick={() => setShowSolutions(false)}
                    >
                      <span style={{ marginRight: "8px" }}>▸</span>Google Ads
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
