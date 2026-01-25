
import img1 from "../assets/footer/img1.png";


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
              "About Us",
              "Pricing",
              "Reseller",
              "Blog",
              "Contact Us",
              "Login",
              "Terms of Use",
              "Refund & Cancellation",
              "Privacy Policy",
            ].map((item, i) => (
              <p key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                ❯❯ {item}
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
              "Channel Manager",
              "Cloud PMS",
              "Cloud POS",
              "Booking Engine",
              "Website Builder",
              "OTA Listing",
              "Stay B2B",
              "APIs for PMS",
              "Payment Gateway Integration",
              "Meta Search Engines",
            ].map((item, i) => (
              <p key={i} style={{ marginBottom: "8px", fontSize: "14px" }}>
                ❯❯ {item}
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
              {["f", "▶", "in"].map((icon, i) => (
                <div
                  key={i}
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
                  }}
                >
                  {icon}
                </div>
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
        Copyright 2025 | www.sonachala.com | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
