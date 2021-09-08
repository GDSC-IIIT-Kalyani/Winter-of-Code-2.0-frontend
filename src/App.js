import React from 'react';
import About from './pages/About';
import MadeBy from './pages/MadeBy';
import Orgs from './pages/Orgs';
import Sponsors from './pages/Sponsors';
import Timeline from './pages/Timeline';

function App(props) {

    return (
        <>
        <About/>
        <Orgs/>
        <Timeline />
        <Sponsors />
        <MadeBy />
        </>
    );

}

export default App;