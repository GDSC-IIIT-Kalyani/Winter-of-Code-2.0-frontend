import React from 'react';
import sponsorsData from './sponsorsData';
import './Sponsor.css';

const Sponsor = () => {
  return (
    <section id='sponsors'>
      <div className='r87e68d'>
        <div className='Melt-bottom'>
          <img src='./Assets/Timeline_end.png' alt='MELT'></img>
        </div>
        <div className='sponsors_wrapper'>
          <h2 className='txt_container'>Our Sponsors</h2>
          <p className='become_sponsor'>
            Our love for Open Souce drived us to make an impact to the community
            through Winter of Code 2.0. We would love more collaborators and
            sponsors for our initiative.{' '}
            <a
              href='https://drive.google.com/file/d/125o6hZFI0Mq_pSoIEqLFwGivFgDY-H3F/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              Sponsor Us
            </a>
          </p>
          <div className='sponsor_grid'>
            <div className='spons_container color-d'>
              <h1>DIAMOND SPONSORS</h1>
              <div className='sponsor_logo'>
                {sponsorsData.Diamond.map((dmd, k) => {
                  return (
                    <div className='spons' key={k}>
                      <img
                        src={dmd.image}
                        style={{ width: '120%' }}
                        alt={dmd.title}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='spons_container color-p'>
              <h1>PLATINUM SPONSORS</h1>
              <div className='sponsor_logo'>
                {sponsorsData.Platinum.map((plat, k) => {
                  return (
                    <div className='spons' key={k}>
                      <img src={plat.image} alt={plat.title} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='spons_container color-g'>
              <h1>GOLD SPONSORS</h1>
              <div className='sponsor_logo'>
                {sponsorsData.Gold.map((gld, k) => {
                  return (
                    <div className='spons' key={k}>
                      <img src={gld.image} alt={gld.title} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='spons_container color-s'>
              <h1>SILVER SPONSORS</h1>
              <div className='sponsor_logo'>
                {sponsorsData.Silver.map((slv, k) => {
                  return (
                    <div
                      className='spons'
                      style={{ width: '30%', height: '100%' }}
                      key={k}
                    >
                      <img src={slv.image} alt={slv.title} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='spons_container color-i'>
              <h1>IVORY SPONSORS</h1>
              <div className='sponsor_logo spons_zz'>
                {sponsorsData.Ivory.map((ivy, k) => {
                  return (
                    <div className='spons' style={{ width: '30%' }} key={k}>
                      <img
                        src={ivy.image}
                        className={k === 2 ? 'nootan' : 'nn'}
                        alt={ivy.title}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='spons_container color-m'>
              <h1>MEDIA SPONSORS</h1>
              <div className='sponsor_logo'>
                {sponsorsData.Media.map((mda, k) => {
                  return (
                    <div className='spons' key={k}>
                      <img
                        src={mda.image}
                        style={{ width: '100%' }}
                        alt={mda.title}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
