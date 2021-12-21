import React from 'react';
import nflLogo from '../../assets/logos/foulfb.png'

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <div>
      <h1>NFL Wing Man<img className='nflLogo' src={nflLogo}></img></h1>
      </div>
      <img src='https://wallpapercave.com/wp/ZSM48St.jpg' alt="background"></img>
      {props.children}
    </header>
  );
}

export default Header;
