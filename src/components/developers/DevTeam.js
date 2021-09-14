import React from "react";
import "./DevTeam.css";
import Card from "../UI/card/Card";
import developers from "./teamData";

function DevTeam() {
  return (
    <section id="developer">
      <div className="developer-title">Our Developers</div>

      <div className="developer-cards">
        {developers.map((developer, index) => (
          <Card
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

export default DevTeam;
