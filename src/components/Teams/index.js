import React, { useState } from 'react';


function Teams() {
    return (
        // <section>
        //     <h3>CHOOSE A TEAM</h3>
        //     <ul className='teams' class='btn'>
        //         <button><li>Arizona Cardinals</li></button>
        //         <li>Atlanta Falcons</li>
        //         <li>Baltimore Ravens</li>
        //         <li>Buffalo Bills</li>
        //         <li>Carolina Panthers</li>
        //         <li>Chicago Bears</li>
        //         <li>Cincinnati Bengals</li>
        //         <li>Cleveland Browns</li>
        //         <li>Dallas Cowboys</li>
        //         <li>Denver Broncos</li>
        //         <li>Detroit Lions</li>
        //         <li>Green Bay Packers</li>
        //         <li>Houston Texans</li>
        //         <li>Indianapolis Colts</li>
        //         <li>Jacksonville Jaguars</li>
        //         <li>Kansas City Chiefs</li>
        //         <li>Las Vegas Raiders</li>
        //         <li>Los Angeles Chargers</li>
        //         <li>Los Angeles Rams</li>
        //         <li>Miami Dolphins</li>
        //         <li>Minnesota Vikings</li>
        //         <li>New England Patriots</li>
        //         <li>New Orleans Saints</li>
        //         <li>New York Giants</li>
        //         <li>New York Jets</li>
        //         <li>Philadelphia Eagles</li>
        //         <li>Pittsburgh Steelers</li>
        //         <li>San Francisco 49ers</li>
        //         <li>Seattle Seahwaks</li>
        //         <li>Tampa Bay Buccaneers</li>
        //         <li>Tennessee Titans</li>
        //         <li>Washington Football Team</li>
        //     </ul>
        // </section>

<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src="https://wallpapercave.com/wp/wp4503421.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Arizona Cardinals</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4503530.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Baltimore Ravens</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4509031.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Buffalo Bills</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4508984.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Carolina Panthers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4509008.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Chicago Bears</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/TqZQBOX.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Cincinnati Bengals</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wc1675698.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Cleveland Browns</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://www.hdwallpaper.nu/wp-content/uploads/2016/12/dallas_cowboys-11.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Dallas Cowboys</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/23/76/OJn4xU.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Denver Broncos</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4524707.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Detroit Lions</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.alphacoders.com/105/1055336.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Green Bay Packers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/34/60/pvs6L3.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Houston Texans</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/32/69/Qb4TPu.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Indianapolis Colts</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="http://blog.hdwallsource.com/wp-content/uploads/2016/05/jacksonville-jaguars-desktop-wallpaper-52939-54660-hd-wallpapers.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Jacksonville Jaguars</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1854981.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Kansas City Chiefs</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapernfl.com/wp-content/uploads/2019/05/Oakland-Raiders-Desktop-Wallpapers.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Las Vegas Raiders</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4535051.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Los Angeles Chargers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4535057.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Los Angeles Rams</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4501758.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Miami Dolphins</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/95/89/ilIrwW.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Minnesota Vikings</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1810625.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>New England Patriots</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp5988973.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>New Orleans Saints</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1813881.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>New York Giants</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4543435.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>New York Jets</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp5231096.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Philadelphia Eagles</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4974951.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Pittsburgh Steelers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images7.alphacoders.com/106/1063939.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>San Francisco 49ers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapertag.com/wallpaper/full/e/9/5/111499-seattle-seahawks-wallpaper-1920x1080-for-ios.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Seattle Seahwaks</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1956208.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Tampa Bay Buccaneers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4551562.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Tennessee Titans</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://www.prosportsbackgrounds.com/wp-content/uploads/2020/09/2020-nfl-washington-hardwood-desktop.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5>Washington Football Team</h5>
    </div>
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  <span class="sr-only">Previous</span>
</a>
<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
</a>
</div>
    );
}

export default Teams;