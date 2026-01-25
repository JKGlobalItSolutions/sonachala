import img1 from "../assets/Pos/img1.png";
import img2 from "../assets/Pos/img2.png";
import img3 from "../assets/Pos/img3.png";
import img4 from "../assets/Pos/img4.png";
import img5 from "../assets/Pos/img5.png";
import img6 from "../assets/Pos/img6.png";

function Pos() {
  return (
    <>
      {/* HERO IMAGE */}
      <div style={{ width: "100%", overflow: "hidden" }}>
        <img
          src={img1}
          alt="Hero Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* BILL TO ROOM */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-5">
            <h1 style={{marginTop:"20px"}}><b>Bill To Room</b></h1>
            <p style={{ color: "#095D42", fontSize: "20px", marginTop:"30px" }}>
              With Sonachala POS, effortlessly add in-room services directly to the guest’s bill,
              ensuring no service goes unbilled. Customize rates, taxes, advance payments,
              and discounts for each service to provide accurate and transparent billing.
            </p>
          </div>

          <div className="col-lg-6 p-5 text-center">
            <img src={img2} alt="" style={{ maxWidth: "100%", height: "300px" }} />
          </div>
        </div>
      </div>

      {/* DINING */}
      <div className="container-fluid mt-5 mb-5" style={{ backgroundColor: "#038A5E1F" }}>
        <div className="row">
          <div className="col-lg-6 p-5 text-center">
            <img src={img3} alt="" style={{ maxWidth: "80%" }} />
          </div>

          <div className="col-lg-6 p-4 px-5">
            <h2 style={{marginTop:"20px"}}><b>Dining</b></h2>
            <p style={{ color: "#095D42", fontSize: "20px", marginTop:"20px" }}>
              Sonachala POS offers a complete solution for table and in-house billing.
              Track orders, payments, taxes, discounts, and offer quick online payment links.
            </p>
          </div>
        </div>
      </div>

      {/* PARCEL / HOME DELIVERY */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-5">
            <h1 style={{marginTop:"20px"}}><b>Parcel Or Home Delivery</b></h1>
            <p style={{ color: "#095D42", fontSize: "20px", marginTop:"20px" }}>
              Easily manage guest delivery orders with Sonachala's Parcel Management System.
              Track order status in real time for smooth operations.
            </p>
          </div>

          <div className="col-lg-6 p-3 text-center">
            <img src={img4} alt="" style={{ maxWidth: "100%", height: "300px" }} />
          </div>
        </div>
      </div>

      {/* ORDER MANAGEMENT */}
      <div className="container-fluid mt-5 mb-5" style={{ backgroundColor: "#038A5E1F" }}>
        <div className="row">
          <div className="col-lg-6 p-4 text-center">
            <img src={img5} alt="" style={{ maxWidth: "80%" }} />
          </div>

          <div className="col-lg-6 p-5 px-5">
            <h2><b>Manage Orders at the ease of your finger tips</b></h2>
            <p style={{ color: "#095D42", fontSize: "20px",marginTop:"20px" }}>
              Track orders from New Order to Order Closed.
              Assign waiters, delivery time, and link guest room numbers
              for a smooth dining experience.
            </p>
          </div>
        </div>
      </div>

       <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-5">
            <h1><b>Automated Pro-Formal Invoice</b></h1>
            <p style={{ color: "#095D42", fontSize: "20px" }}>
             Generate clear, professional invoices for every transaction across your hotel and restaurant operations with the Sonachala POS system. It automatically calculates GST, net payable amounts, guest GST, and POS charges, ensuring accuracy and compliance. Integrated Quick Pay links offer guests a fast and secure payment option, while Pro-Forma Invoices present a transparent, organized summary of all charges—simplifying financial management for your team.
            </p>
          </div>

          <div className="col-lg-6 p-5 text-center">
            <img src={img6} alt="" style={{ maxWidth: "100%", height: "300px" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pos;
