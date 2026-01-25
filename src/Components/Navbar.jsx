import logo from "../assets/Navbar/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSolutions, setShowSolutions] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [menuIndex, setMenuIndex] = useState(0);
  const menuRef = useRef(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowSolutions(false);
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menus = ["Products", "Services", "Integrations", "Other Services"];

  return (
    <>
      {/* TOP BAR */}
      <nav
        className="navbar"
        style={{ backgroundColor: "#1f3d34", padding: "12px 40px" }}
      >
        <div className="container-fluid d-flex align-items-center gap-2">
          <img src={logo} alt="logo" style={{ height: "38px" }} />
          <span style={{ color: "#fff", fontWeight: 700, fontSize: "20px" }}>
            SONACHALA
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

            {/* SOLUTIONS */}
            <li
              className="nav-item position-relative"
              ref={menuRef}
              onMouseEnter={() => setShowSolutions(true)}
            >
              <span
                className="nav-link text-dark"
                style={{ cursor: "pointer" }}
                onClick={() => setShowSolutions(!showSolutions)}
              >
                Solutions ▾
              </span>

              {showSolutions && (
                <>
                  {/* LEFT MENU BOX */}
                  <div
                    className="position-absolute bg-white shadow"
                    style={{
                      top: "42px",
                      left: "0",
                      width: "220px",
                      zIndex: 1000,
                      borderBottom: "3px solid #6aa400",
                    }}
                  >
                    {menus.map((item, index) => (
                      <div
                        key={item}
                        onMouseEnter={() => {
                          setActiveMenu(item);
                          setMenuIndex(index);
                        }}
                        style={{
                          padding: "12px 16px",
                          cursor: "pointer",
                          fontWeight: 500,
                          backgroundColor:
                            activeMenu === item ? "#f5f5f5" : "#fff",
                        }}
                      >
                        {item} ▸
                      </div>
                    ))}
                  </div>

                  {/* RIGHT SUB MENU – STRAIGHT ALIGN */}
                  {activeMenu && (
                    <div
                      className="position-absolute bg-white shadow"
                      style={{
                        top: `${42 + menuIndex * 44}px`,
                        left: "220px",
                        width: "280px",
                        zIndex: 1000,
                        borderBottom: "3px solid #6aa400",
                      }}
                    >
                      {activeMenu === "Products" && (
                        <>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/channel_manager">Channel Manager</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/cloud-pms">Cloud PMS</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/cloud-pos">Cloud POS</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/booking-engine">Booking Engine</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/website-builder">Website Builder</Link>
                        </>
                      )}

                      {activeMenu === "Services" && (
                        <>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/ota-listing">OTA Listing</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/revenue-management">Revenue Management</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/stay-b2b">Stay B2B</Link>
                        </>
                      )}

                      {activeMenu === "Integrations" && (
                        <>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/pms-apis">PMS (APIs for PMS)</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/payment-gateways">Payment Gateways</Link>
                          <Link className="d-block px-3 py-2 text-dark text-decoration-none" to="/meta-search">Meta Search Engines</Link>
                        </>
                      )}

                      {activeMenu === "Other Services" && (
                        <Link
                          className="d-block px-3 py-2 text-dark text-decoration-none"
                          to="/sonachala-connect"
                        >
                          Sonachala Connect
                        </Link>
                      )}
                    </div>
                  )}
                </>
              )}
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
    </>
  );
};

export default Navbar;
