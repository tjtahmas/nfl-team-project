import React, { useState } from 'react';


function Teams() {
    return (
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
      <h5 class='btn'>Arizona Cardinals</h5>
    </div>
</div>
<div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4503530.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Baltimore Ravens</h5>
    </div>
</div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4509031.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Buffalo Bills</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4508984.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Carolina Panthers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4509008.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Chicago Bears</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Images-Bengals-Logo-Wallpapers.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Cincinnati Bengals</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Photos-Cleveland-Browns-Wallpapers.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Cleveland Browns</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://www.hdwallpaper.nu/wp-content/uploads/2016/12/dallas_cowboys-11.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Dallas Cowboys</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/23/76/OJn4xU.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Denver Broncos</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4524707.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Detroit Lions</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images.alphacoders.com/105/1055336.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Green Bay Packers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/34/60/pvs6L3.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Houston Texans</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/32/69/Qb4TPu.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Indianapolis Colts</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="http://blog.hdwallsource.com/wp-content/uploads/2016/05/jacksonville-jaguars-desktop-wallpaper-52939-54660-hd-wallpapers.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Jacksonville Jaguars</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1854981.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Kansas City Chiefs</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/WCj0JZu.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Las Vegas Raiders</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4535051.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Los Angeles Chargers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4535057.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Los Angeles Rams</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4501758.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Miami Dolphins</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://cdn.wallpapersafari.com/95/89/ilIrwW.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Minnesota Vikings</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1810625.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>New England Patriots</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp5988973.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>New Orleans Saints</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1813881.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>New York Giants</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4543435.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>New York Jets</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp5231096.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Philadelphia Eagles</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4974951.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Pittsburgh Steelers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://images7.alphacoders.com/106/1063939.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>San Francisco 49ers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapertag.com/wallpaper/full/e/9/5/111499-seattle-seahawks-wallpaper-1920x1080-for-ios.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Seattle Seahwaks</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp1956208.jpg" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Tampa Bay Buccaneers</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://wallpapercave.com/wp/wp4551562.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn'>Tennessee Titans</h5>
    </div>
  </div>
  <div class="carousel-item">
    <img src="https://www.prosportsbackgrounds.com/wp-content/uploads/2020/09/2020-nfl-washington-hardwood-desktop.png" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
      <h5 class='btn wft'>Washington Football Team</h5>
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