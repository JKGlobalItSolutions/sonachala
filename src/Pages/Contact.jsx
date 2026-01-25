import img1 from "../assets/Contact/img1.png";
import banner from "../assets/Contact/banner.png";

function Contact() {
  return (
    <>
      

      {/* CONTENT */}
      <div className="container mt-5 mb-5 text-center">
        {/* IMAGE */}
        <img
          src={img1}
          alt="Contact Us"
          style={{
            maxWidth: "280px",
            width: "100%",
            marginBottom: "20px",
          }}
        />

        {/* TEXT */}
        <h4 style={{ fontWeight: "600", color: "#1f3d2b" }}>
          We love to hear from you feel
        </h4>

        <p style={{ color: "red", fontWeight: "500", marginBottom: "25px" }}>
          free to get in touch
        </p>
      </div>

      {/* FORM SECTION */}
      <div
        className="container-fluid"
        style={{ background: "#f7f9f2", padding: "50px 0" }}
      >
        <div
          className="container"
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "8px",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              background: "#000",
              color: "#fff",
              textAlign: "center",
              padding: "12px",
              borderRadius: "6px",
              marginBottom: "25px",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            free to get in touch
          </div>

          <p style={{ marginBottom: "30px", color: "#666" }}>
            Please provide us required details
          </p>

          <div className="row g-4">
            {/* Name */}
            <div className="col-md-6">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                style={{ padding: "12px" }}
              />
            </div>

            {/* Email */}
            <div className="col-md-6">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email Address"
                style={{ padding: "12px" }}
              />
            </div>

            {/* Mobile */}
            <div className="col-md-6">
              <label>Mobile</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone Number"
                style={{ padding: "12px" }}
              />
            </div>

            {/* Property Name */}
            <div className="col-md-6">
              <label>Property Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Property Name"
                style={{ padding: "12px" }}
              />
            </div>

            {/* Purpose */}
            <div className="col-md-6">
              <label>Purpose</label>
              <select className="form-select" style={{ padding: "12px" }}>
                <option>Select Option</option>
                <option>Hotel PMS</option>
                <option>Channel Manager</option>
                <option>Website Development</option>
              </select>
            </div>

            {/* Message */}
            <div className="col-md-6">
              <label>Message</label>
              <textarea
                className="form-control"
                rows="5"
                placeholder="Enter Message"
                style={{ padding: "12px", resize: "none" }}
              ></textarea>
            </div>

            {/* Verify Code */}
            <div className="col-md-6">
              <label>Verify Code</label>
              <div className="d-flex align-items-center gap-3">
                <span
                  style={{
                    color: "blue",
                    fontWeight: "600",
                    fontSize: "18px",
                  }}
                >
                  032897
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Code"
                />
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <div className="text-center mt-4">
            <button
              className="btn"
              style={{
                background: "#0a8f44",
                color: "#fff",
                padding: "10px 40px",
                fontSize: "18px",
                borderRadius: "6px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
