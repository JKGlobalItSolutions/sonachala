import img1 from "../assets/paymentgateway/img1.png"
import img2 from "../assets/paymentgateway/img2.png"



function Paymentgateway() {
    return(
            <>
             <div className="container-fluid"  style={{background:'radial-gradient(circle, #038A5E, #D9D9D9 0%, #6EB19B 100%)', color: "#000000", paddingTop: "20px", paddingBottom: "20px"}}>
                    <div className="row">
                      <div className="col-lg-6 p-5">
                        <h1 style={{ marginTop: "20px" }}>
                          <b>Secure Payment Gateway Integration for Accommodation Websites</b>
                        </h1>
                       
                      </div>
            
                      <div className="col-lg-6 p-5 text-center">
                        <img
                          src={img1}
                          alt="Revenue"
                          style={{ maxWidth: "100%", height: "300px" }}
                        />
                      </div>
                    </div>
                  </div>

                    <div className="container-fluid mt-5 mb-5" >
                         <p style={{textAlign:"center"}}>
                            At Sonachala, we provide a complete Hotel Management System designed to streamline your online operations. Our advanced Booking Engine seamlessly integrates with multiple leading payment gateways such as Razorpay, PayPal, Airpay, and more—allowing you to offer your guests flexible and secure payment options.
                         </p>
                         <p style={{textAlign:"center"}}>
                            We understand that smooth, hassle-free payments are critical for increasing bookings and customer satisfaction. With real-time transaction processing, your guests can book instantly with full confidence, while you enjoy immediate booking status updates.
                         </p>
                   </div>

                 <div className="container-fluid"  style={{background:'radial-gradient(circle, #038A5E, #D9D9D9 0%, #6EB19B 100%)', color: "#e8e3e3", paddingTop: "70px", paddingBottom: "70px",textAlign:"center"}}>
                    <p><h1><b>Real-Time Inventory & Room Rate Management</b></h1></p>
                    <p><h1><b>Dynamic Pricing & Promotions Control</b></h1></p>
                    <p><h1><b>Comprehensive Dashboard for Easy Operations</b></h1></p>
                 </div>

                 <div className="container mt-5 mb-5" >
                    <img src={img2} alt=" " style={{ maxWidth: "100%", height: "auto" }} />
                 </div>
            
            
            
            
            </>




    )
}
export default Paymentgateway