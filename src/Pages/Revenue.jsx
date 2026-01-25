import img1 from "../assets/Revenue/img1.png"



function Revenue() {
    return(
        <>
           
      {/* HERO SECTION */}
      <div className="container-fluid" style={{
          background:
            "linear-gradient(to top right, #038A5E 5%, #81C5AE 35%, #C0E2D7 50%, #ffffff 100%)",
        }}>
        <div className="row">
          <div className="col-lg-6 p-5">
            <h1 style={{ marginTop: "20px" }}>
              <b>REVENUE MANAGEMENT</b>
            </h1>
            <p style={{ fontSize: "20px", marginTop: "30px" }}>
              Our Revenue Management services are designed to maximize your
              hotel's profitability through strategic pricing and inventory
              control. We analyze market trends, demand patterns, and competitor
              data to optimize rates and boost revenue. With a data-driven
              approach, we help you achieve sustainable growth and stronger
              financial performance.
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

      {/* CONTENT SECTION */}
      <div className="container-fluid mt-5 mb-5">
        <div>
          <h6 style={{ paddingLeft: "20px" }}>
            <b>1. ONLINE PRESENCE:</b>
          </h6>
          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              paddingLeft: "20px",
            }}
          >
            In todays digital era, it imperative that you have an online
            presence – it is where everyone searches answers and solutions.
            Make it convenient for your potential customers to find you with
            just a few clicks. Our approach to the development of your online
            presence includes the following
          </p>
        </div>

        <div>
          <h6 style={{ paddingLeft: "20px" }}>
            <b>2. ONLINE PROMOTION:</b>
          </h6>
          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              paddingLeft: "20px",
            }}
          >
            We design and help create promotions ideally suited for your
            property to attract customers and start booking flow. This includes
            creating a competitors list and keeping a track of all the pricing
            and promotion movements of your competitor.
          </p>
        </div>

        <div>
          <h6 style={{ paddingLeft: "20px" }}>
            <b>3. ONLINE VISIBILITY:</b>
          </h6>
          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              paddingLeft: "20px",
            }}
          >
            Search engines like Google use algorithms to rank each website and
            its content based on keywords. Our SEO practises is all about
            ensuring your website is search engine friendly and working towards
            ranking your hotel website at the top of search engine results
            whenever a search is made relating to the keywords present on your
            hotel website.
          </p>
        </div>

        <div>
          <h6 style={{ paddingLeft: "20px" }}>
            <b>4. REAL TIME INVENTORY:</b>
          </h6>
          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              paddingLeft: "20px",
            }}
          >
            We help you manage your inventory (no. of rooms available) on a
            real-time basis – this means you will always know how many rooms are
            available for sale and how many rooms have been booked and for what
            duration. Managing this task manually is almost impossible and
            subject to errors which can lead to unsold rooms or even over-booking
            of rooms.
          </p>
        </div>

        <div>
          <h6 style={{ paddingLeft: "20px" }}>
            <b>5. REVENUE MANAGER:</b>
          </h6>
          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              paddingLeft: "20px"
            }}
          >
            Implementing our best practices, proven techniques and the latest in
            travel distribution developments, we will optimize and increase the
            financial results of your hotel.
          </p>
        </div>
      </div>                        
        
        
        
        
        </>
    )
}
export default Revenue;