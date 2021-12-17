import React from 'react';
import coverImage from '../../assets/cover/Brain-Tap-3.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <div>
<<<<<<< Updated upstream
      <h1>NFL Fan Banter</h1>
      <h3>Your team isn't that bad... You just need the right stats</h3>
=======
      <h1>NFL Fan Banter<img class='nflLogo' src={nflLogo}></img></h1>
>>>>>>> Stashed changes
      </div>
      <img src='https://www.teahub.io/photos/full/93-931010_american-football-field-hd.jpg' alt="wooden background"></img>
      {props.children}
    </header>
  );
}

export default Header;
