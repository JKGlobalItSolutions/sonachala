import bgimg1 from "../assets/Reseller/bgimg1.png"
import img1 from "../assets/Reseller/img1.png"
import img2 from "../assets/Reseller/img2.png"
import img3 from "../assets/Reseller/img3.png"




function Reseller() {


    const services = [
        "Hotel Web Designers & Marketers",
        "Hotel IT Solution Providers",
        "Hotel PMS Provider",
        "Booking Engine Provider",
        "Hotel Hardware Supplier",
        "Hotel Web Designers & Marketers",
        "Hotel Hardware Supplier",
        "Hotel Consultants, Hotel GM or Any Staff",
        "Tour Operators & Hotel Booking Agents",
        "Hotel Reputation Management Companies",
    ];


    return (

        <>


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





            <div className="container" style={{ marginTop: "60px" }}>
                <div className="row align-items-center">

                    {/* LEFT SIDE IMAGE */}
                    <div className="col-12 col-md-6 text-center">
                        <img
                            src={img2}
                            alt="Hotel Services"
                            style={{
                                width: "100%",
                                maxWidth: "550px",
                                borderRadius: "12px",
                            }}
                        />
                    </div>

                    {/* RIGHT SIDE CONTENT BOXES */}
                    <div className="col-12 col-md-6">
                        <div className="row">
                            {services.map((item, index) => (
                                <div className="col-6 mb-4" key={index}>
                                    <div
                                        style={{
                                            border: "1px solid #ddd",
                                            padding: "20px",
                                            height: "100%",
                                            borderRadius: "10px",
                                            backgroundColor: "#ffffff",
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            fontWeight: "600",
                                            fontSize: "14px",
                                        }}
                                    >
                                        {item}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>



            <div
                className="container-fluid mt-5 mb-0"
                style={{
                    backgroundColor: "#054E36",
                    padding: "40px 0",
                }}
            >
                <h1
                    className="text-center"
                    style={{
                        color: "#ffffff",
                        fontWeight: "700",
                        margin: 0,
                    }}
                >
                    Sonachala Reseller Partner Plans
                </h1>
            </div>

            <div
                className="container-fluid d-flex align-items-center"
                style={{
                    backgroundImage: `url(${bgimg1})`,
                    backgroundSize: "contain",   // ✅ FULL IMAGE VISIBLE
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    minHeight: "100vh",
                    padding: "10px 10px",
                    backgroundColor: "#fff",     // optional: fills empty space
                }}
            >
                <div className="container">
                    <div className="row align-items-start">

                        {/* LEFT CARD */}
                        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-start mb-4">
                            <div
                                style={{
                                    backgroundColor: "#173D32",
                                    padding: "24px",
                                    borderRadius: "16px",
                                    maxWidth: "340px",
                                    color: "#fff",
                                }}
                            >
                                <h5 style={{ fontWeight: "700" }}>Referral Program</h5>
                                <p style={{ color: "#3CFFB5", fontSize: "14px", lineHeight: "1.6" }}>
                                    Simply refer hotels to Sonachala. Our team manages the demo,
                                    onboarding, training, and support—while you earn recurring
                                    revenue with zero operational effort
                                </p>
                            </div>
                        </div>

                        {/* CENTER CARD */}
                        <div className="col-12 col-lg-4 d-flex justify-content-center mb-4 mt-lg-5">
                            <div
                                style={{
                                    backgroundColor: "#173D32",
                                    padding: "24px",
                                    borderRadius: "16px",
                                    maxWidth: "360px",
                                    color: "#fff",
                                }}
                            >
                                <h5 style={{ fontWeight: "700" }}>Reseller Commission</h5>
                                <p style={{ color: "#3CFFB5", fontSize: "14px", lineHeight: "1.6" }}>
                                    A complete hospitality platform designed to simplify operations,
                                    increase bookings, and maximize revenue—everything your clients
                                    need, in one powerful solution.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT CARD */}
                        <div className="col-12 col-lg-4 d-flex justify-content-center justify-content-lg-end mb-4 mt-lg-7">
                            <div
                                style={{
                                    backgroundColor: "#173D32",
                                    padding: "24px",
                                    borderRadius: "16px",
                                    maxWidth: "340px",
                                    color: "#fff",
                                }}
                            >
                                <h5 style={{ fontWeight: "700" }}>White Label</h5>
                                <p style={{ color: "#3CFFB5", fontSize: "14px", lineHeight: "1.6" }}>
                                    Everything you need to manage, promote, and grow hospitality
                                    businesses—on one powerful platform
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>






            <div className="container">
                <h1 className="text-center" style={{ color: "#054E36" }}><b>Grow your business with Sonachala</b></h1>
            </div>



            <div className="container" style={{ marginTop: "80px", marginBottom: "80px" }}>
                <div className="row align-items-center">

                    {/* LEFT CONTENT */}
                    <div className="col-12 col-lg-6 mb-4 mb-lg-0">

                        {/* <h2
                            style={{
                                color: "#038A5E",
                                fontWeight: "700",
                                marginBottom: "30px",
                            }}
                        >
                            Partner Benefits
                        </h2> */}

                        {/* ITEM */}
                        <div style={{ marginBottom: "20px" }}>
                            <h4 style={{color:"#038A5E", fontWeight: "600" }}><b>
                                Recurring Revenue and High Commissions</b>
                            </h4>
                            <p style={{ color: "#555", marginBottom: 0 }}>
                                Earn consistent income with our generous commission structure that
                                rewards your sales performance.
                            </p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4 style={{color:"#038A5E", fontWeight: "600" }}><b>
                                High Partnership Discounts</b>
                            </h4>
                            <p style={{ color: "#555", marginBottom: 0 }}>
                                Enjoy special pricing and exclusive discounts available only to
                                our valued partners.
                            </p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4 style={{color:"#038A5E", fontWeight: "600" }}><b>
                                Dedicated Account Manager</b>
                            </h4>
                            <p style={{ color: "#555", marginBottom: 0 }}>
                                Your personal success manager will help you maximize opportunities
                                and grow your business.
                            </p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4 style={{color:"#038A5E", fontWeight: "600" }}><b>
                                Sales and Marketing Assistance</b>
                            </h4>
                            <p style={{ color: "#555", marginBottom: 0 }}>
                                Access our ready-to-use marketing materials, campaigns, and sales
                                enablement tools.
                            </p>
                        </div>

                        <div style={{ marginBottom: "20px" }}>
                            <h4 style={{color:"#038A5E", fontWeight: "600" }}><b>
                                Live Support</b>
                            </h4>
                            <p style={{ color: "#555", marginBottom: 0 }}>
                                Access our ready-to-use marketing materials, campaigns, and 24/7
                                expert support to help you and your customers whenever you need
                                assistance.
                            </p>
                        </div>

                        <div>
                            <h4 style={{color:"#038A5E", fontWeight: "600" }}><b>
                                Smooth Onboarding Process</b>
                            </h4>
                            <p style={{ color: "#555", marginBottom: 0 }}>
                                Quick and easy setup with comprehensive training to get you
                                started fast.
                            </p>
                        </div>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="col-12 col-lg-6 text-center">
                        <img
                            src={img3}
                            alt="Partner Benefits"
                            style={{
                                width: "100%",
                                maxWidth: "480px",
                                borderRadius: "12px",
                            }}
                        />
                    </div>

                </div>
            </div>










        </>

    );

}



export default Reseller