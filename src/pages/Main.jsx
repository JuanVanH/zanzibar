import React from 'react';
import widePicture from '../public/images/bg.svg';
import zanzi from '../public/images/arushaVSzanzibar.svg';
import navimg from '../public/images/nav.png';
import bookimg from '../public/images/book.png';
import planimg from '../public/images/plan.png';
import contactimg from '../public/images/contact.png';

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
      <div className="main-content">
        <p className="main-inter-title">Find your holiday here</p>
        <h1>Come and explore Tanzania with us</h1>
        <p>
          Life is an adventure, come and join us in Tanzania and experience life to the fullest. Olkaria invites you to
          explore Tanzania the fullest. We believe a journey with us takes your travel experiences to a new level. You
          are warmly welcomed to Tanzania – Olkaria will be your home, your best friend.
          <p>
            Tanzania will surprise you with its beautiful nature and culture. In Arusha Northern you find the most
            beautiful national parks Eastern Africa has to offer. We can organise safaris, motor bike tours, hiking
            tours and many more for you. Feel like ending your holidays at the beach? No problem! At Zanzibar Island you
            can end your holiday with white beaches and crystal blue waters. It’s a paradise to learn how to kitesurf,
            do snorkeling trips and excursions or just enjoy the sun, ocean, beach and relax.
          </p>
          <p>
            Have a look at our packages and offers and fall in love with Tanzania. Looking for something else? No
            worries, we also create personalized packages. Let us know what you would like to do during your stay in
            Tanzania and we create the perfect holiday for you.
          </p>
        </p>
      </div>
      <div className="main-section">
        <div className="logo-text">
          <img src={navimg} alt="nav" />
          <h1>Explore and choose</h1>
          <p>Have a look at what we have to offer and compose the holiday of your dreams</p>
        </div>
        <div className="logo-text">
          <img src={contactimg} alt="nav" />
          <h1>Contact host</h1>
          <p>Get in contact with us and tell us about your wishes</p>
        </div>
        <div className="logo-text">
          <img src={planimg} alt="nav" />
          <h1>Make a plan</h1>
          <p>We create a holiday with your wishes adapted to your budget </p>
        </div>
        <div className="logo-text">
          <img src={bookimg} alt="nav" />
          <h1>Book</h1>
          <p>Confirm your booking and reservation </p>
        </div>
      </div>
    </>
  );
}

export default Main;
