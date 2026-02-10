
import img1 from "../assets/Footer/img1.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#1f3d34",
        color: "#ffffff",
        paddingTop: "60px",
      }}
    >
      <div className="container">
        <div className="row">

          {/* INDUSTRIES */}
          <div className="col-md-4">
            <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>
              Industries We Serve
            </h6>
            <div style={{ width: "50px", borderBottom: "2px dashed #fff", marginBottom: "15px" }}></div>

            {[
              "Hotels & Resorts",
              "Boutique Properties",
              "Vacation Rentals",
              "Hostels",
              "Guest Houses",
              "Travel Agencies",
            ].map((item, i) => (
              <p key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                ❯❯ {item}
              </p>
            ))}
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-4">
            <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>
              Quick Links
            </h6>

            <div style={{ width: "50px", borderBottom: "2px dashed #fff", marginBottom: "15px" }}></div>

            {[
              { text: "Home", link: "/home" },
              { text: "Pricing", link: "/pricing" },
              { text: "Reseller", link: "/reseller" },
              // { text: "Blog", link: null },
              { text: "Contact Us", link: "/contact" },
              // { text: "Login", link: null },
              // { text: "Terms of Use", link: null },
              // { text: "Refund & Cancellation", link: null },
              // { text: "Privacy Policy", link: null },
            ].map((item, i) => (
              <p key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                ❯❯ {item.link ? (
                  <Link to={item.link} style={{ color: "#ffffff", textDecoration: "none" }}>
                    {item.text}
                  </Link>
                ) : (
                  item.text
                )}
              </p>
            ))}
          </div>

          {/* SERVICES */}
          <div className="col-md-4">
            <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>
              Our Services
            </h6>

            <div style={{ width: "50px", borderBottom: "2px dashed #fff", marginBottom: "15px" }}></div>

            {[
              { text: "Channel Manager", link: "/channel_manager" },
              { text: "Cloud PMS", link: "/Pms" },
              { text: "Cloud POS", link: "/Pos" },
              { text: "Booking Engine", link: "/BookingEngine" },
              { text: "Website Builder", link: "/WebsiteBuilder" },
              { text: "OTA Listing", link: "/Ota" },
              { text: "Stay B2B", link: "/B2b" },
              { text: "APIs for PMS", link: "/API" },
              { text: "Payment Gateway Integration", link: "/paymentgateway" },
              { text: "Meta Search Engines", link: "/Googleads" },
            ].map((item, i) => (
              <p key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                ❯❯ <Link to={item.link} style={{ color: "#ffffff", textDecoration: "none" }}>
                  {item.text}
                </Link>
              </p>
            ))}
          </div>
        </div>

        {/* DIVIDER */}
        <hr style={{ borderColor: "#ffffff55", margin: "40px 0" }} />

        {/* SOCIAL + PAYMENT */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: "f", url: "https://www.facebook.com/share/1D87eESrPY/ ", label: "Facebook" },
                { icon: "▶", url: "https://youtube.com/@sonachalarm?si=WElaD8n_bC53-HsY", label: "YouTube" },
                { icon: "in", url: "https://www.linkedin.com/company/jk-kanakku/", label: "LinkedIn" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#ffffff",
                    color: "#1f3d34",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-6 text-end">
            
              <img
            
                src={img1}
                alt="payment"
                style={{
                  height: "35px",
                  marginLeft: "10px",
                  backgroundColor: "#fff",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              />
            
            <div style={{ marginTop: "20px", fontSize: "16px", fontWeight: "600", textAlign:"right" }}>
              Contact Us 8608601049
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          marginTop: "40px",
          padding: "15px 0",
          borderTop: "1px solid #ffffff55",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        Copyright 2025 | <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>www.sonachala.com</Link> | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
