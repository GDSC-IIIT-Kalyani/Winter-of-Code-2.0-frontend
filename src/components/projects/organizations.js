import React from 'react';
import skit from '../../assets/projectAssests/skit_vernucular_ai_png.png';
import githubLogo from '../../assets/projectAssests/github_logo.png';
import fossasia from '../../assets/projectAssests/fossasia_copy.png';
import sawo from '../../assets/projectAssests/saw_;labs_png.png';

function Orgs() {
  return (
    <div className='mid'>
      <ul className="project_sponsors">
      <li><img src={skit} alt='sponsor_Logo'/></li>
      <li><img src={fossasia} alt='sponsor_Logo' /></li>
      <li><img src={githubLogo} alt='sponsor_Logo' /></li>
      <li><img src={sawo} alt='sponsor_Logo' /></li>
      <li><img src={githubLogo} alt='sponsor_Logo' /></li>
      <li><img src={githubLogo} alt='sponsor_Logo' /></li>
    </ul>
    <div class="desc">ORGANISATIONS</div>
    </div>
  );
}

export default Orgs;
