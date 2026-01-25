import img1 from "../assets/B2b/img1.png"
import img2 from "../assets/B2b/img2.png"
import img3 from "../assets/B2b/img3.png"
import img4 from "../assets/B2b/img4.png"





function B2b(){
    return(
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

                    <div className="container mt-3 mb-3">
                        <div>
                            <img src={img2} alt="" style={{ maxWidth: "100%", height: "100%" }} />
                        </div>
                   </div>

                   <div className="container-fluid" style={{backgroundColor:"#038A5E1F"}}>
                           <div className="row">
                             {/* LEFT CONTENT */}
                             <div className="col-lg-6 p-5 " >
                               <h4><b>Everything You Need to Manage Your Property</b></h4>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Our B2B booking solution is designed to help you:
                               </p>
                                <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Expand your corporate client base with easy onboarding.
                               </p>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Increase booking volume through streamlined processes.
                               </p>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Reduce administrative workload with self-service tools.
                               </p>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Improve relationships with travel agents and corporate clients.
                               </p>
                                <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Gain valuable insights through detailed reporting.
                               </p>
                   
                               
                             </div>
                   
                             {/* RIGHT IMAGE */}
                             <div className="col-lg-6 p-5 text-center">
                               <img
                                 src={img3}
                                 alt="Booking Preview"
                                 style={{
                                   maxWidth: "95%",
                                   height: "auto",
                                   marginbottom: "60px",
                                 }}
                               />
                             </div>
                           </div>
                         </div>

                         <div className="container-fluid" >
                           <div className="row">
                             {/* LEFT CONTENT */}
                             <div className="col-lg-6 p-5 " >
                               <h4><b>Complete B2B BookingManagement</b></h4>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Manage all aspects of your B2B relationships through our comprehensive dashboard:
                               </p>
                                <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Create and manage multiple corporate accounts with different access levels
                               </p>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Set custom commission structures for travel agents
                               </p>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                Track all Stay B2B in real-time
                               </p>
                               <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                 Generate detailed reports on corporate booking performance
                               </p>
                                <p style={{  fontSize: "20px", marginTop: "20px" }}>
                                Automate invoicing and payment reconciliation
                               </p>
                   
                               
                             </div>
                   
                             {/* RIGHT IMAGE */}
                             <div className="col-lg-6 p-5 text-center">
                               <img
                                 src={img4}
                                 alt="Booking Preview"
                                 style={{
                                   maxWidth: "95%",
                                   height: "300px",
                                   margintop: "-400px",
                                 }}
                               />
                             </div>
                           </div>
                         </div>
        
        
        </>
    )
}
export default B2b