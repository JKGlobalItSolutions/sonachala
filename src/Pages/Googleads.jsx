import img1 from "../assets/Googleads/img1.png"




function Googleads() {
    return (
        <>
            <div className="container-fluid" style={{background:'radial-gradient(circle, #038A5E, #D9D9D9 0%, #6EB19B 100%)', color: "#000000", paddingTop: "20px", paddingBottom: "20px"}}>
                    <div className="row">
                      <div className="col-lg-6 p-5">
                        <h1 style={{ marginTop: "20px" }}>
                          <b>Google Hotel Ads</b>
                        </h1>
                        <p style={{ fontSize: "20px", marginTop: "30px" }}>
                          Get more direct bookings through Google Hotel Ads and pay only for confirmed reservations. Reach millions of travelers worldwide with no setup fees or rental costs—just low commission on successful bookings.
                        </p>
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

                   <div className="container-fluid mt-5 mb-5 text-center">
                       <h1>What are the benefits of using Google Hotel Ads Service?</h1>
                   </div>


                   <div
        className="container"
        style={{
          background:
            "linear-gradient(to top right, #038A5E 5%, #81C5AE 35%, #C0E2D7 50%, #ffffff 100%)",
        }}
      >
        <div className="row">
          <div className="col-lg-6 p-3">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>✅ Wider Audience Reach</b>
                <br />
                Showcase your hotel’s live rates and availability on Google Search and Maps to attract millions of travelers globally.
              </li>
              <li>
                <b>✅ Real-Time Rate & Availability Updates:</b>
                <br />
                Seamless integration ensures your rates, availability, and offers are always current—building trust and avoiding overbookings.
              </li>
              <li>
                <b>✅ Boost in Direct Bookings:</b>
                <br />
                Drive more bookings directly through your hotel website, reducing reliance on costly third-party OTAs and improving profit margins.
              </li>
              <li>
                <b>✅ Enhanced Online Reputation:</b>
                <br />
                 Feature your property on Google’s trusted platforms to strengthen brand credibility and position your hotel as a reliable choice among travelers.
              </li>
              
            </ul>
          </div>
          <div className="col-lg-6 p-3">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <b>✅ Comprehensive Performance Insights</b>
                <br />
                 Access detailed reports and analytics to monitor impressions, clicks, conversions, and booking trends—empowering you to make data-driven decisions.
              </li>
              <li>
                <b>✅ Budget-Friendly & Risk-Free Advertising</b>
                <br />
                Benefit from a Pay-Per-Conversion model—pay only for confirmed bookings, ensuring optimal return on investment without upfront ad spend.
              </li>
              <li>
                <b>✅ Effortless Listing Management</b>
                <br />
               Easily manage and optimize your Google Hotel Ads listing with expert support and intuitive tools designed to maximize your property’s visibility and success.
              </li>
            </ul>
          </div>
        </div>
      </div>

        <div className="container mt-5 mb-5" >
            <div className="text-center">
                <h5 style={{color: "#038A5E"}}><b>Connect Your Sonachala Tech Booking Engine Directly to Google for Maximum Exposure</b></h5><br />
                <p>Seamlessly link your hotel’s real-time rates and availability to Google platforms—including Google Search, Google Maps, and all devices like desktops, tablets, and smartphones. This integration allows you to showcase your direct booking options alongside OTAs, giving travelers a clear view of your best offers and availability</p><br />

                 <h5 style={{color: "#038A5E"}}><b>Only Pay for Confirmed Bookings (Pay-Per-Conversion Model)</b></h5><br />
                <p>Benefit from a risk-free pricing model where you only pay commission on actual, confirmed bookings. Choose from flexible options such as fixed rental or percentage-based plans to suit your business needs.
                   Take advantage of Google Hotel Ads through Sonachala Tech and drive more direct bookings without setup fees or hidden charges. Contact us today to activate Google Hotel Ads for your property.</p><br />
            </div>              
        </div>

         <div className="container text-center my-5">
      {/* TOP GREEN CARD */}
      <div
        style={{
          display: "inline-block",
          backgroundColor: "#078c5a",
          color: "#fff",
          padding: "20px 40px",
          borderRadius: "18px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            color: "#b6ff5f",
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "5px",
          }}
        >
          certified partner of Google
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: "700",
          }}
        >
          Google Hotel Ads
        </div>
      </div>

      {/* BOTTOM BOXES */}
      <div className="row justify-content-center g-4">
        {/* BOX 1 */}
        <div className="col-md-4 d-flex justify-content-center">
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px 30px",
              borderRadius: "18px",
              fontSize: "22px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              minWidth: "280px",
            }}
          >
            Real Time Rate Update
          </div>
        </div>

        {/* BOX 2 */}
        <div className="col-md-4 d-flex justify-content-center">
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px 30px",
              borderRadius: "18px",
              fontSize: "22px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              minWidth: "280px",
            }}
          >
            Increase Organic <br /> Search on Google
          </div>
        </div>

        {/* BOX 3 */}
        <div className="col-12 d-flex justify-content-center mt-3">
          <div
            style={{
              backgroundColor: "#fff",
              padding: "25px 50px",
              borderRadius: "18px",
              fontSize: "22px",
              fontWeight: "600",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
              minWidth: "320px",
            }}
          >
            Pay lowest <br /> commission
          </div>
        </div>
      </div>
    </div>
        
        
        
        </>
           
             



    );
}
export default Googleads