import React from "react";
import "./DevTeam1.css";
import ProfileCard from "../UI/profileCard/ProfileCard";
import developers from "./teamData";

function DevTeam1() {
  return (
    <section id="developer">
      <div className="developer-title">Our Developers</div>
      <div className="developer-cards">
        {developers.map((developer, index) => (
          <ProfileCard
            name={developer.name}
            image={developer.image}
            role={developer.role}
            socialMedia={developer.socialMedia}
          />
        ))}
      </div>
    </section>
  );
}

export default DevTeam1;
