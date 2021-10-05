import React from "react";
import skit from "../../assets/organizations/skit2.png";
import hoppscotch from "../../assets/organizations/Hoppscotch.png"
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
          <img src={skit} alt="org_logo" />
        </li>
        <li>
          <img src={aysncAPI} alt="org_logo" />
        </li>
        <li>
          <img src={jinaAi} alt="org_logo" />
        </li>
        <li>
          <img src={llvm2} alt="org_logo" />
        </li>
        <li>
          <img src={edualgo2} alt="org_logo" />
        </li>
        <li>
          <img src={hoppscotch} alt="org_logo" />
        </li>
      </ul>
      <div class="desc">ORGANISATIONS</div>
    </div>
  );
}

export default Orgs;
