import img1 from "../assets/Ota/img1.png";
import img2 from "../assets/Ota/img2.png";

function Ota() {
  return (
    <>
      {/* HERO IMAGE */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={img1}
          alt="Hero Banner"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="container-fluid">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 p-5">
            <h4><b>Submit Your Property Details</b></h4>
            <p style={{  fontSize: "20px", marginTop: "20px" }}>
              Share your hotel information, room types, amenities, photos, and policies. Our team ensures accurate and complete listings for a smooth OTA setup.
            </p>

            <h4><b>We Set Up & Optimize Listings</b></h4>
            <p style={{  fontSize: "20px", marginTop: "20px" }}>
             We create or refine your OTA profiles with compelling descriptions, high-quality images, correct policies, and optimized content to improve search visibility and attract more guests
            </p>

            <h4><b>Connect to Channel Manager</b></h4>
            <p style={{  fontSize: "20px", marginTop: "20px" }}>
              Once your OTA accounts are ready, we link them to our powerful Channel Manager. This ensures real-time synchronization of rates, inventory, and bookings across all platforms.
            </p>

            <h4><b>Start Receiving Bookings Across OTAs</b></h4>
            <p style={{  fontSize: "20px", marginTop: "20px" }}>
              Your property is listed on major OTAs — including Booking.com, Expedia, Agoda, and more. With our support, you can easily list on Booking.com, Expedia, MakeMyTrip, and start receiving bookings instantly while we monitor and optimize your performance
            </p>           
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 p-5 text-center">
            <h1 style={{  color: "#095D42",marginTop: "20px" }}>
              <b>How It Works?</b>
            </h1>
            <img
              src={img2}
              alt="Booking Preview"
              style={{
                maxWidth: "95%",
                height: "auto",
                marginTop: "50px",
              }}
            />
          </div>
        </div>
      </div>

            <div className="containter-fluid mt-5 mb-5" style={{backgroundColor:"#095D42", padding:"10px", color: "white", textAlign:"center",fontSize:"30px",fontFamily:"sans-serif"}} >
                <b>Complete listing management handled by experts</b>                
            </div>

            <div className="container">
                <div style={{textAlign:"center"}}>
                   <h4><b>1. Complete OTA Account Setup</b></h4>
                   <p style={{fontSize:"20px",fontweight:"500px",color:"#038A5E"}}>We help you set up and verify your hotel accounts on all major OTAs professionally and efficiently.</p>

                   <h4><b>Real-Time Inventory & Rate Sync</b></h4>
                   <p style={{fontSize:"20px",fontweight:"500px",color:"#038A5E"}}>Integrated with our channel manager—update once and sync everywhere. Say goodbye to overbookings and rate mismatches.</p>

                   <h4><b>Professional Listing Optimization</b></h4>
                   <p style={{fontSize:"20px",fontweight:"500px",color:"#038A5E"}}>We craft engaging descriptions, optimize your photos, amenities, and room details to rank better on OTA searches.</p>

                   <h4><b>Rate Parity & Promotions Management</b></h4>
                   <p style={{fontSize:"20px",fontweight:"500px",color:"#038A5E"}}>Maintain consistent pricing across platforms and run special deals like Early Bird, Last Minute, and more directly from your dashboard.</p>

                   <h4><b>List on Global & Regional OTAs</b></h4>
                   <p style={{fontSize:"20px",fontweight:"500px",color:"#038A5E"}}>From Booking.com and Expedia to niche OTAs and regional platforms like Goibibo, we cover all your bases.</p>
                </div>



            </div>
    </>
  );
}

export default Ota;
