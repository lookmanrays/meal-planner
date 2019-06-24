import React from 'react';
import './Header.css';
import { ReactComponent as DietDoctorLogo } from './DietDoctorLogo.svg'

function Header() {
  return (
    <header className="Header">
      <DietDoctorLogo height={45} />
    </header>
  );
}

export default Header;
