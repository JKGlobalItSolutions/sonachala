

import { useState } from "react";

const Pricing = () => {
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    hotelName: '',
    hotelId: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Quote request:', formData);
    alert('Thank you for your quote request! We will get back to you soon.');
    setShowQuoteForm(false);
    setFormData({
      name: '',
      hotelName: '',
      hotelId: '',
      email: '',
      phone: ''
    });
  };

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

              
            </div>
          </div>

        </div>

        {/* GET A QUOTE BUTTON */}
        <div style={{ marginTop: "60px" }}>
          <button
            onClick={() => setShowQuoteForm(true)}
            style={{
              backgroundColor: "#fff",
              border: "2px solid #fff",
              color: "#0B8F61",
              padding: "15px 40px",
              borderRadius: "30px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#0B8F61";
              e.target.style.color = "#fff";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#0B8F61";
            }}
          >
            Get a Quote
          </button>
        </div>
      </div>

      {/* QUOTE FORM MODAL */}
      {showQuoteForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
          onClick={() => setShowQuoteForm(false)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "20px",
              padding: "40px",
              maxWidth: "500px",
              width: "90%",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQuoteForm(false)}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#666",
              }}
            >
              ×
            </button>

            <h3
              style={{
                color: "#0B8F61",
                marginBottom: "30px",
                textAlign: "center",
                fontWeight: "700",
              }}
            >
              Get a Quote
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Hotel Name *
                </label>
                <input
                  type="text"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Hotel ID
                </label>
                <input
                  type="text"
                  name="hotelId"
                  value={formData.hotelId}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Email ID *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "5px",
                    fontWeight: "600",
                    color: "#333",
                  }}
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "16px",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "15px",
                  backgroundColor: "#0B8F61",
                  border: "none",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#0A7A51";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#0B8F61";
                }}
              >
                Submit Quote Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;
