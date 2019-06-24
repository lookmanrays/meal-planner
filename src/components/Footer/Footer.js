import React from 'react';
import './Footer.css';
import { ReactComponent as DietDoctorLogo } from './DietDoctorLogo.svg'

function Footer() {
  return (
    <footer className="Footer">
      <div className="FooterContainer">
        <DietDoctorLogo height={100} />
      </div>
    </footer>
  );
}

export default Footer;
