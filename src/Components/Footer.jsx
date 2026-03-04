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
          <div className="col-md-3">
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
          <div className="col-md-3">
            <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>
              Quick Links
            </h6>

            <div style={{ width: "50px", borderBottom: "2px dashed #fff", marginBottom: "15px" }}></div>

            {[
              { text: "Home", link: "/home" },
              { text: "Pricing", link: "/pricing" },
              { text: "Reseller", link: "/reseller" },
              { text: "Contact Us", link: "/contact" },
            ].map((item, i) => (
              <p key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                <Link to={item.link} style={{ color: "#ffffff", textDecoration: "none" }}>
                  ❯❯ {item.text}
                </Link>
              </p>
            ))}
          </div>

          {/* SERVICES */}
          <div className="col-md-3">
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
            ].map((item, i) => (
              <p key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                <Link to={item.link} style={{ color: "#ffffff", textDecoration: "none" }}>
                  ❯❯ {item.text}
                </Link>
              </p>
            ))}
          </div>

          {/* CONTACT DETAILS */}
          <div className="col-md-3">
            <h6 style={{ fontWeight: "600", marginBottom: "10px" }}>
              Contact Us
            </h6>

            <div style={{ width: "50px", borderBottom: "2px dashed #fff", marginBottom: "15px" }}></div>

            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              Sonachala Technologies
            </p>

            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              Annai Parvathi Nagar, opposite to Collectorate Office, Vengikkal, Tiruvannamalai - 606604
            </p>

            {/* Phone Numbers */}
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              📞 <a href="tel:8608601049" style={{ color: "#fff", textDecoration: "none" }}>
                8608601049
              </a>
            </p>

            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              📞 <a href="tel:8608600778" style={{ color: "#fff", textDecoration: "none" }}>
                8608600778
              </a>
            </p>

            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              📞 <a href="tel:8608600772" style={{ color: "#fff", textDecoration: "none" }}>
                8608600772
              </a>
            </p>

            {/* Emails */}
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              ✉ <a href="mailto:sonachaloffical@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
                sonachaloffical@gmail.com
              </a>
            </p>

            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              ✉ <a href="mailto:sonachalahelp@gmail.com" style={{ color: "#fff", textDecoration: "none" }}>
                sonachalahelp@gmail.com
              </a>
            </p>

            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              ✉ <a href="mailto:info@sonachala.com" style={{ color: "#fff", textDecoration: "none" }}>
                info@sonachala.com
              </a>
            </p>
          </div>

        </div>

        {/* SOCIAL */}
        <div className="row align-items-center mt-4">
          <div className="col-md-6">
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                { icon: "f", url: "https://www.facebook.com/share/1D87eESrPY/", label: "Facebook" },
                { icon: "▶", url: "https://youtube.com/@sonachalarm", label: "YouTube" },
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
                    textDecoration: "none",
                  }}
                >
                  {item.icon}
                </a>
              ))}
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
        Copyright 2025 | 
        <Link to="/" style={{ color: "#ffffff", textDecoration: "none" }}>
          {" "}www.sonachala.com{" "}
        </Link>
        | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;