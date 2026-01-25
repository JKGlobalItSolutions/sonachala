import React from "react";
import img1 from "../assets/WebsiteBuilder/img1.png";
import img2 from "../assets/WebsiteBuilder/img2.png";

function WebsiteBuilder() {
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
      <div className="container-fluid mt-5 mb-5">
        <div>
          <h2 style={{ marginLeft: "100px" }}>
            <b>Create a Powerful Website with Sonachala Website Builder</b>
          </h2>
        </div>

        <div>
          <p>
            Design and manage your hotel website effortlessly using our easy-to-use,
            CMS-powered platform. Choose from a variety of SEO-friendly,
            mobile-optimized templates that ensure your property looks great on any
            device—including Facebook-compatible layouts to reach a wider audience.
          </p>
        </div>

        {/* KEY FEATURES */}
        <div className="container-fluid mt-5 mb-5">
          <h2 style={{ color: "#095D42" }}>
            <b>Key Features</b>
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <p>No technical skills needed: Easily change colors, content, and images via a user-friendly admin panel.</p>
            <p>Global reach: Offer multi-language and multi-currency support to convert guests worldwide.</p>
            <p>Boost visibility: Add your own SEO (titles, keywords, descriptions) to rank higher in search results.</p>
            <p>Seamless integration: Display discounts, offers, TripAdvisor, Google Maps, live weather, and more.</p>
            <p>Engage guests everywhere: Connect your site with Facebook and TripAdvisor widgets.</p>
            <p>Free hosting & updates: Upload photos, edit content anytime, and enjoy reliable hosting—at no extra cost.</p>
            <p>
              Whether you're a boutique hotel or a large resort, Sonachala Tech Website Builder equips you with everything
              you need to stand out, drive more bookings, and engage travelers globally.
            </p>
          </div>
        </div>
      </div>

             <div style={{textAlign:"center"}}>
                <h1><b>Benefits of Your Hotel's Mobile App</b></h1>
            </div>

            <div className="container-fluid mt-3 mb-3" style={{ background: "linear-gradient(to top right, #038A5E 5%, #81C5AE 35%, #C0E2D7 50%, #ffffff 100%)" }} >
                <div className="row">
                    <div className="col-lg-6 p-3 ">
                        <ul style={{ listStyleType: "none" }}>
                            <li><p>✅ DIY Website Creation
                                      Easily build your own website by choosing from multiple professionally designed templates.</p></li>
                            <li><p>✅ SEO-Friendly Templates
                                       Improve search engine rankings with built-in SEO optimization.</p></li>
                            <li><p>✅ Mobile & Facebook Compatible
                                       Engage travelers anytime, anywhere with responsive and Facebook-ready designs.</p></li>
                            <li><p>✅ Multi-Language & Currency Support
                                       Attract global guests with flexible language and currency options.</p></li>
                            <li><p>✅ No Technical Skills Required
                                       Change colors, content, and layout via an intuitive admin panel—no coding needed.</p></li>
                            <li><p>✅ Free Web Hosting
                                       Enjoy reliable and secure hosting without additional charges.</p></li>
                            <li><p>✅ Direct Photo Management
                                       Upload and edit photos directly on your hotel’s website.</p></li>
                            <li><p>✅ Social Media & Widget Integration
                                       Add Facebook, TripAdvisor, and other useful widgets for better guest engagement.</p></li>
                            <li><p>✅ Custom SEO Controls
                                       Define page titles, keywords, and descriptions to boost search visibility.</p></li>
                            <li><p>✅ Promote Offers & Discounts
                                       Showcase booking engine offers and discounts directly on your website.</p></li>
                            <li><p>✅ Nearby Attractions with Google Maps
                                       Display nearby locations and tourist spots with integrated Google Maps.</p></li>
                            <li><p>✅ Live Weather Widget
                                      Keep your guests informed with real-time weather updates.</p></li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-5">
                        <ul style={{ listStyleType: "none" }}>
                            <img src={img2} alt="" style={{ maxWidth: "70%"   }} />
                        </ul>
                    </div>
                </div>
            </div>
    </>
  );
}

export default WebsiteBuilder;
