import React from 'react';
import coverImage from '../../assets/cover/Brain-Tap-3.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <div>
      <h1>NFL Fan Banter</h1>
      <h3>Your team isn't that bad... You just need the right stats</h3>
      </div>
      {/* <img src={coverImage} alt="wooden background"></img> */}
      {props.children}
    </header>
  );
}

export default Header;
