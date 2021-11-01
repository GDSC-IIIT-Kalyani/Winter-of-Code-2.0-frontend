import React from "react";
import skit from "../../assets/organizations/skit.png";
import hoppscotch from "../../assets/organizations/Hoppscotch.png"
import llvm2 from "../../assets/organizations/llvm_large.png";
import aysncAPI from "../../assets/organizations/asyncAPI4.png";
import gitaInitiative from "../../assets/organizations/gitaInit.png";
import jinaAi from "../../assets/organizations/jinaAi.png"
import autodl from "../../assets/organizations/auto-dl.png"
import mojo from "../../assets/organizations/moja-global.png"
import edualgo from "../../assets/organizations/EduAlgoalt.png";

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
          <img src={gitaInitiative} alt="org_logo" />
        </li>
        <li>
          <img src={hoppscotch} alt="org_logo" />
        </li>
        <li>
          <img src={autodl} alt="org_logo" />
        </li>
        <li>
          <img src={mojo} alt="org_logo" />
        </li>
        <li>
          <img src={edualgo} alt="org_logo" />
        </li>
      </ul>
      <div class="desc">ORGANISATIONS</div>
    </div>
  );
}

export default Orgs;
