
import heroImg from "../assets/Home/img1.png";
import img2 from "../assets/Home/img2.png";
import img3 from "../assets/Home/img3.png";
import img4 from "../assets/Home/img4.png";
import img5 from "../assets/Home/img5.png";
import lg1 from "../assets/Home/lg1.png";
import lg2 from "../assets/Home/lg2.png";
import lg3 from "../assets/Home/lg3.png";
import lg4 from "../assets/Home/lg4.png";
import lg5 from "../assets/Home/lg5.png";
import lg6 from "../assets/Home/lg6.png";
import lg7 from "../assets/Home/lg7.png";
import lg8 from "../assets/Home/lg8.png";
import lg9 from "../assets/Home/lg9.png";


const Home = () => {

    const logos = [lg1, lg2, lg3, lg4, lg5, lg6, lg7, lg8, lg9];

    const services = [
        {
            title: "Cloud PMS",
            desc: "Say goodbye to manual entry of OTA bookings. Our Cloud PMS seamlessly automates the entire process—auto-assigning room numbers, generating Pro-Forma Invoices, creating detailed reports, and delivering a host of other powerful features to streamline your hotel operations."
        },
        {
            title: "Google Hotel Ads",
            desc: "Simplify your hotel and restaurant billing with our all-in-one Cloud POS system. It enables effortless room billing, pro-forma invoice generation, GST reporting, and much more—removing the hassle of multiple devices and outdated POS setups."
        },
        {
            title: "Website Builder",
            desc: "Create a stunning, SEO-friendly, and fully responsive website with Sonachala Website Builder. Ensure a smooth and engaging browsing experience for your guests across all devices while enhancing your hotel’s online presence."
        },
        {
            title: "Mobile Application",
            desc: "Enhance your hotel’s guest experience with a feature-rich, high-performance mobile app. Offer your guests instant access to event details, easy navigation via Google Maps, and a host of other convenient services—all through an intuitive interface."
        },
        {
            title: "Payment Gateway Integration",
            desc: "Simplify transactions with Sonachala seamless payment gateway integration. Supports PayPal, Razorpay, Airpay, PaySwiff, Ingenico, and more—ensuring secure and fast payment processing."
        },
        {
            title: "Booking Engine",
            desc: "Experience hassle-free reservations with Sonachala one-page Booking Engine. Guests can book multiple rooms, apply discounts, choose payment gateways, and opt for full or partial payments in one interface."
        }
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
                    src={heroImg}
                    alt="Hero Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </div>

            <div
                style={{
                    backgroundColor: "#1E372F",
                    color: "#D2F00B",
                    padding: "80px 0",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <p
                        style={{
                            fontSize: "18px",
                            lineHeight: "1.8",
                            maxWidth: "950px",
                            margin: "0 auto",
                            fontWeight: "400",
                        }}
                    >
                        Our all-in-one platform empowers hotels and accommodations of every
                        size with a complete suite of solutions—from Web Design and Booking
                        Engine to Channel Manager, Cloud PMS, Mobile App, and secure Payment
                        Gateway Integration.
                        <br />
                        <br />
                        Enhance your online visibility with powerful e-Promotion tools and
                        increase profitability through intelligent Revenue Management.
                        <br />
                        <br />
                        Partner with us to simplify operations, strengthen your brand, and grow
                        your business—all from one powerful platform.
                    </p>
                </div>
            </div>





            <div className="container my-5">
                <div className="row align-items-center">

                    {/* LEFT SIDE – 6 BOXES (COL-9) */}
                    <div className="col-md-9">
                        <div className="row">

                            {services.map((item, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div
                                        style={{
                                            border: "1px solid #ddd",
                                            padding: "25px",
                                            height: "100%",
                                            borderRadius: "6px",
                                            backgroundColor: "#ffffff",
                                        }}
                                    >
                                        <h5
                                            style={{
                                                fontWeight: "600",
                                                marginBottom: "12px",
                                                color: "#038A5E",
                                            }}
                                        >
                                            <b>{item.title}</b>
                                        </h5>

                                        <p
                                            style={{
                                                fontSize: "14px",
                                                lineHeight: "1.7",
                                                marginBottom: "0",
                                            }}
                                        >
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>


                    {/* RIGHT SIDE – IMAGE (COL-3) */}
                    <div className="col-md-3 text-center">
                        <img
                            src={img2}
                            alt="Services"
                            style={{
                                width: "100%",
                                height: "auto",
                                position: "sticky",
                                top: "100px",
                            }}
                        />
                    </div>

                </div>
            </div>




            <div className="container" style={{ padding: "40px 0" }}>
                <div
                    className="d-flex align-items-center justify-content-center flex-wrap"
                >
                    {/* LEFT LINE */}
                    <div
                        className="d-none d-md-block"
                        style={{
                            flex: 1,
                            height: "2px",
                            backgroundColor: "#000",
                            marginRight: "15px",
                        }}
                    ></div>

                    {/* TEXT */}
                    <p
                        style={{
                            margin: "10px 0",
                            fontSize: "18px",
                            fontWeight: "500",
                            color: "#1E372F",
                            textAlign: "center",
                        }}
                    >
                        More than <strong>500+</strong> properties worldwide use Sonachala services
                    </p>

                    {/* RIGHT LINE */}
                    <div
                        className="d-none d-md-block"
                        style={{
                            flex: 1,
                            height: "2px",
                            backgroundColor: "#000",
                            marginLeft: "15px",
                        }}
                    ></div>
                </div>
            </div>


            <div
                style={{
                    backgroundColor: "#1E372F",
                    padding: "10px 0",
                }}
            >
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                        {logos.map((logo, index) => (
                            <div
                                key={index}
                                style={{
                                    padding: "20px",
                                }}
                            >
                                <img
                                    src={logo}
                                    alt={`company-${index}`}
                                    style={{
                                        height: "65px", // 🔥 slightly increased
                                        width: "auto",
                                        maxWidth: "100%",
                                        objectFit: "contain",
                                        display: "block",
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div
                style={{
                    padding: "70px 0",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <h3
                        style={{
                            fontWeight: "700",   // bold heading
                            marginBottom: "20px",
                            color: "#1E372F",
                        }}
                    >
                        Connected Channels
                    </h3>

                    <p
                        style={{
                            fontSize: "16px",
                            lineHeight: "1.8",
                            maxWidth: "1300px",
                            margin: "0 auto",
                            color: "#333",
                        }}
                    >
                        Seamlessly integrate with leading OTAs and distribution platforms like
                        Booking.com, Expedia, Agoda, Airbnb, MakeMyTrip, Goibibo, and more.

                        Manage rates, inventory, and reservations across all channels in
                        real-time through a single dashboard, ensuring maximum visibility and
                        eliminating overbookings.
                    </p>
                </div>
            </div>

            <div
                style={{
                    background: "linear-gradient(90deg, #054E36, #0BB47D)",
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <img
                    src={img3}
                    alt="Hero Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </div>



            <div style={{ padding: "70px 0" }}>
                <div className="container">
                    <h3
                        style={{
                            fontWeight: "700",
                            marginBottom: "20px",
                            color: "#1E372F",
                        }}
                    >
                        Manage Everything on the Go with the Sonachala
                    </h3>

                    <p
                        style={{
                            fontSize: "25px",
                            lineHeight: "1.8",
                            maxWidth: "950px",
                            color: "#333",
                            margin: 0,
                        }}
                    >
                        Stay connected with your property anytime, anywhere using the Sonachala
                        Mobile App. Effortlessly manage your hotel operations on the move—saving
                        time while staying fully informed and in control.
                    </p>
                </div>
            </div>



            <div style={{ padding: "80px 0" }}>
                <div className="container">
                    <div className="row align-items-center">

                        {/* LEFT CONTENT */}
                        <div className="col-md-9">
                            <h4
                                style={{
                                    fontWeight: "700",
                                    marginBottom: "25px",
                                    color: "#1E372F",
                                    fontSize:"35px"
                                }}
                            >
                                Key Features:
                            </h4>

                            <ul
                                style={{
                                    paddingLeft: "18px",
                                    margin: 0,
                                }}
                            >
                                {[
                                    "Inventory Management – Update and control your room inventory with ease.",
                                    "Rate Management – Adjust rates in real-time to optimize revenue.",
                                    "Activity Logs – Track every action for complete transparency.",
                                    "Single Login for Multiple Properties – Manage all your hotels with a single login.",
                                    "Request Payments – Initiate and track payment requests directly.",
                                    "Offline Booking & Instant Blocks – Handle bookings and block rooms even without internet access.",
                                    "Manage Waitlist Bookings – View and update waitlist status effortlessly.",
                                    "Manage Discounts – Apply and control promotional offers anytime.",
                                    "Download Reports – Get insightful reports instantly on your device.",
                                    "Restricted User Access – Set user permissions to ensure secure access.",
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            fontSize: "25px",
                                            lineHeight: "1.9",
                                            marginBottom: "10px",
                                            color: "#333",
                                        }}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="col-md-3 text-center">
                            <img
                                src={img4}
                                alt="Key Features"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    maxWidth: "360px",
                                }}
                            />
                        </div>

                    </div>
                </div>
            </div>


            <div
                style={{
                    width: "100%",
                    overflow: "hidden",
                }}
            >
                <img
                    src={img5}
                    alt="Hero Banner"
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </div>


        </>



    );
};

export default Home;
