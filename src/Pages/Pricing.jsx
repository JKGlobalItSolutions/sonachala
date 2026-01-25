

const Pricing = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0B8F61, #0F6F52)",
        padding: "90px 0",
      }}
    >
      <div className="container text-center text-white">

        {/* TOP LABEL */}
        <div
          style={{
            display: "inline-block",
            padding: "6px 18px",
            border: "1px solid #fff",
            borderRadius: "30px",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          Flexible Plans
        </div>

        {/* TITLE */}
        <h1 style={{ fontWeight: "700", marginBottom: "10px" }}>
          Choose Your Pricing
        </h1>

        <p style={{ opacity: 0.9, marginBottom: "60px" }}>
          Whether you're just starting or scaling up, we have the right plan for you
        </p>

        {/* PRICING CARDS */}
        <div className="row justify-content-center">

          {/* CARD 1 */}
          <div className="col-md-4 mb-4">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "30px",
                height: "100%",
                color: "#000",
              }}
            >
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>Starter Plan</p>

              <h5 style={{ color: "#0B8F61", fontWeight: "600" }}>
                Only Channel Manager
              </h5>

              <button
                style={{
                  backgroundColor: "#5AAA2B",
                  border: "none",
                  color: "#fff",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "30px",
                  margin: "20px 0",
                  fontWeight: "600",
                }}
              >
                Get Pricing
              </button>

              <p style={{ fontWeight: "600" }}>Centralized Hotel Booking System</p>

              {[
                "Front Desk",
                "Channel Manager",
                "Booking Engine *",
                "Google Hotel Ads *",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", marginBottom: "6px" }}>
                  ✦ {item}
                </p>
              ))}

              <p style={{ fontWeight: "600", marginTop: "15px" }}>
                Security & Accessibility
              </p>

              {[
                "PCI-DSS certified",
                "99.99% uptime",
                "User Right and Roles",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", marginBottom: "6px" }}>
                  ✦ {item}
                </p>
              ))}
            </div>
          </div>

          {/* CARD 2 */}
          <div className="col-md-4 mb-4">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "30px",
                height: "100%",
                color: "#000",
              }}
            >
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>Standard Plan</p>

              <h5 style={{ color: "#0B8F61", fontWeight: "600" }}>
                Channel Manager + Property Management System
              </h5>

              <button
                style={{
                  backgroundColor: "#5AAA2B",
                  border: "none",
                  color: "#fff",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "30px",
                  margin: "20px 0",
                  fontWeight: "600",
                }}
              >
                Get Pricing
              </button>

              <p style={{ fontWeight: "600" }}>Centralized Hotel Booking System</p>

              {[
                "Front Desk",
                "Channel Manager",
                "Booking Engine *",
                "Google Hotel Ads *",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", marginBottom: "6px" }}>
                  ✦ {item}
                </p>
              ))}

              <p style={{ fontWeight: "600", marginTop: "15px" }}>
                Security & Accessibility
              </p>

              {[
                "PCI-DSS certified",
                "99.99% uptime",
                "User Right and Roles",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", marginBottom: "6px" }}>
                  ✦ {item}
                </p>
              ))}

              <button
                style={{
                  marginTop: "20px",
                  backgroundColor: "#0B4F3A",
                  border: "none",
                  color: "#fff",
                  padding: "10px 25px",
                  borderRadius: "30px",
                }}
              >
                Read More
              </button>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-md-4 mb-4">
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "20px",
                padding: "30px",
                height: "100%",
                color: "#000",
              }}
            >
              <p style={{ fontSize: "14px", marginBottom: "5px" }}>PMS Pro Plan</p>

              <h5 style={{ color: "#0B8F61", fontWeight: "600" }}>
                Channel Manager + PMS + POS + Housekeeping
              </h5>

              <button
                style={{
                  backgroundColor: "#5AAA2B",
                  border: "none",
                  color: "#fff",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "30px",
                  margin: "20px 0",
                  fontWeight: "600",
                }}
              >
                Get Pricing
              </button>

              <p style={{ fontWeight: "600" }}>Centralized Hotel Booking System</p>

              {[
                "Front Desk",
                "Channel Manager",
                "Booking Engine *",
                "Google Hotel Ads *",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", marginBottom: "6px" }}>
                  ✦ {item}
                </p>
              ))}

              <p style={{ fontWeight: "600", marginTop: "15px" }}>
                Security & Accessibility
              </p>

              {[
                "PCI-DSS certified",
                "99.99% uptime",
                "User Right and Roles",
              ].map((item, i) => (
                <p key={i} style={{ fontSize: "14px", marginBottom: "6px" }}>
                  ✦ {item}
                </p>
              ))}

              <button
                style={{
                  marginTop: "20px",
                  backgroundColor: "#0B4F3A",
                  border: "none",
                  color: "#fff",
                  padding: "10px 25px",
                  borderRadius: "30px",
                }}
              >
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Pricing;
