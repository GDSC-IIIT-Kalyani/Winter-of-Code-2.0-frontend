import React from "react";
import skit from "../../assets/organizations/skit2.png";
import llvm from "../../assets/organizations/llvm.png";
import llvm2 from "../../assets/organizations/llvm_large.png";
import aysncAPI from "../../assets/organizations/asyncAPI4.png";
import edualgo2 from "../../assets/organizations/Edualgoalt.png";
import jinaAi from "../../assets/organizations/jinaAi.png"

import "./Project.css";

function Orgs() {
  return (
    <div className="mid">
      <ul className="project_sponsors">
        <li>
          <img src={skit} alt="sponsor_Logo" />
        </li>
        <li>
          <img src={aysncAPI} alt="sponsor_Logo" />
        </li>
        <li>
          <img src={jinaAi} alt="sponsor_Logo" />
        </li>
        <li>
          <img src={llvm} alt="sponsor_Logo" />
        </li>
        <li>
          <img src={edualgo2} alt="sponsor_Logo" />
        </li>
        <li>
          <img src={llvm2} alt="sponsor_Logo" />
        </li>
      </ul>
      <div class="desc">ORGANISATIONS</div>
    </div>
  );
}

export default Orgs;
