import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import img1 from "../assets/Contact/img1.png";

// ENV
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitMessage("");

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          setSubmitMessage("✓ Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
          setTimeout(() => setSubmitMessage(""), 3000);
        },
        (error) => {
          console.error(error);
          setSubmitMessage("✗ Failed to send message");
          setLoading(false);
          setTimeout(() => setSubmitMessage(""), 3000);
        }
      );
  };

  return (
    <>
      {/* HEADER */}
      <div className="container mt-5 mb-5 text-center">
        <img src={img1} alt="Contact" style={{ maxWidth: "280px" }} />
        <h4 style={{ fontWeight: 600, color: "#1f3d2b" }}>
          We love to hear from you
        </h4>
        <p style={{ color: "red", fontWeight: 500 }}>
          free to get in touch
        </p>
      </div>

      {/* FORM */}
      <div className="container-fluid" style={{ background: "#f7f9f2", padding: "50px 0" }}>
        <div className="container bg-white p-4 rounded">
          <div
            style={{
              background: "#000",
              color: "#fff",
              textAlign: "center",
              padding: "12px",
              borderRadius: "6px",
              marginBottom: "25px",
              fontWeight: 600,
            }}
          >
            Free to get in touch
          </div>

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row g-4">

              <div className="col-md-6">
                <label>Name</label>
                <input name="from_name" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label>Email</label>
                <input type="email" name="from_email" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label>Mobile</label>
                <input name="phone" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label>Property Name</label>
                <input name="property_name" className="form-control" required />
              </div>

              <div className="col-md-6">
                <label>Purpose</label>
                <select name="purpose" className="form-select" required>
                  <option value="">Select Option</option>
                  <option>Hotel PMS</option>
                  <option>Channel Manager</option>
                  <option>Website Development</option>
                </select>
              </div>

              <div className="col-md-6">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="text-center mt-4">
              {submitMessage && (
                <p style={{ color: submitMessage.includes("✓") ? "green" : "red" }}>
                  {submitMessage}
                </p>
              )}
              <button
                type="submit"
                className="btn"
                disabled={loading}
                style={{
                  background: "#0a8f44",
                  color: "#fff",
                  padding: "10px 40px",
                  fontSize: "18px",
                }}
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
