import React from "react";
import "./eventPartner.css";
import img1 from "../../assets/EventPrtImages/ABES_Institute_of_Technology_Ghaziabad.jpg"
import img2 from "../../assets/EventPrtImages/Ajeenkya_DY_Patil_University.jpg"
import img3 from "../../assets/EventPrtImages/Amity_University_Noida.jpg"
import img4 from "../../assets/EventPrtImages/Jalpaiguri_Government_Engineering_College.jpg"
import img5 from "../../assets/EventPrtImages/New_LJ_Institute_of_Engineering_and_Technology.jpg"
import img6 from "../../assets/EventPrtImages/Rajasthan_Technical_University_Kota.jpg"
import img7 from "../../assets/EventPrtImages/Sathyabama_Institute_of_Science_and_Technology.jpg"
import img8 from "../../assets/EventPrtImages/Sister_Nivedita_University.jpg"
import img9 from "../../assets/EventPrtImages/University_School_Of_Information_Communication_and_Technology.jpg"
import img10 from "../../assets/EventPrtImages/Usha_Mittal_Institute_of_Technology_Mumbai.jpg"

const eventPartner = () => {
    return (
        <div className = "event-part">
            <div className = "event-part-heading">Event Partners</div>
            <div className = "event-part-images">
            <figure>
            <img src={img1} alt="EventPartnerLogo" />
            <img src={img2} alt="EventPartnerLogo" />
            <img src={img3} alt="EventPartnerLogo" />
            <img src={img4} alt="EventPartnerLogo" />
            <img src={img5} alt="EventPartnerLogo" />
            <img src={img6} alt="EventPartnerLogo" />
            <img src={img7} alt="EventPartnerLogo" />
            <img src={img8} alt="EventPartnerLogo" />
            <img src={img9} alt="EventPartnerLogo" />
            <img src={img10} alt="EventPartnerLogo" />
            </figure>
            </div>
        </div>
    );
};

export default eventPartner;