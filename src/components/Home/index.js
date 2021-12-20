import React, { useState } from 'react';

function Home() {
  return (
    <section>
      <div class='centerTitle'>
        <h2 class='missionTitle'>OUR MISSION</h2>
      </div>
      
      <div class='page-section' id='start'>
        <img src="https://b.fssta.com/uploads/content/dam/fsdigital/fscom/nfl/images/2013/11/24/112413-NFL-TEXANS-FANS-DC-PI-CQ.vresize.1200.630.high.72.jpg" class=" sadFan" alt="..." />
        <h3 class='thisFan'>We want to help you from being this fan...</h3>
      </div>
      <h2 class='centerTitle'>To being...</h2>
      <div class='page-section' id='finish'>
        <img src="https://sportshub.cbsistatic.com/i/r/2015/09/08/1b4d0eb7-6424-441c-ad23-cc460b41503d/resize/770x575/13db3734e98a7973a2fb22d49226cdc0/browns.jpg" class="happyFan" alt="..." />
        <h3 class='thatFan'>THAT fan</h3>
      </div>
      <h2 class='centerTitle'>Your team isn't bad... You just need the right stats</h2>
    </section>
  );
};

export default Home;
