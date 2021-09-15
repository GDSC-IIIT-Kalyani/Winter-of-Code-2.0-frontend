import React from 'react';
import skit from '../../assets/projectAssests/skit_vernucular_ai_png.png';
import githubLogo from '../../assets/projectAssests/github_logo.png';
import fossasia from '../../assets/projectAssests/fossasia_copy.png';
import sawo from '../../assets/projectAssests/saw_;labs_png.png';

function Orgs() {
  return (
    <div className='mid'>
      <img
        src={skit}
        alt='sponsor_Logo'
      />
      <img src={fossasia} alt='sponsor_Logo' />
      <img src={githubLogo} alt='sponsor_Logo' />
      <img src={sawo} alt='sponsor_Logo' />
      <img src={githubLogo} alt='sponsor_Logo' />
      <img src={githubLogo} alt='sponsor_Logo' />
    </div>
  );
}

export default Orgs;
