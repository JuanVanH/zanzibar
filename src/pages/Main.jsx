import React from 'react';
import widePicture from '../public/images/bg.svg';
import zanzi from '../public/images/arushaVSzanzibar.svg';

function Main() {
  return (
    <>
      <div className="picture wide">
        <img style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="wide" src={widePicture} />
        <img alt="zanzi" src={zanzi} className="main-zanzi" />
        <p className="main-title">Safari VS Beach</p>
        <p className="main-subtitle">
          You don’t need to choose,
          <br /> experience the best of both worlds
        </p>
      </div>
    </>
  );
}

export default Main;
