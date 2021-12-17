import React from 'react';
import coverImage from '../../assets/cover/Brain-Tap-3.jpg';
import nflLogo from '../../assets/logos/foulfb.png'

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <div>
      <h1>NFL Fan Banter<img class='nflLogo' src={nflLogo}></img></h1>
      <p>Your team isn't that bad... You just need the right stats</p>
      </div>
      {/* <img src={coverImage} alt="wooden background"></img> */}
      {props.children}
    </header>
  );
}

export default Header;
