import React, { useState } from 'react';
import PageContent from '../PageContent';
import 'animate.css';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_STATS } from '../../utils/helpers'
import Stats  from '../Stats'


function Teams() {

  const [stats] = useState([
    { code: "ARI" },
    { code: "ATL" },
    { code: "BAL" },
  ]);

  const [currentStats, setCurrentStats] = useState(stats[0]);
  var tStats = "CIN";
  const renderStats = (tStats, txt) => {
    // alert( txt)
    switch (tStats) {
      case 'ARI':{
        alert('case');
        setCurrentStats(txt);
        return;
      }
      case 'ATL':
        return "ATL";
      case 'BAL':
        return "BAL";
      default:
        return "CIN";
    }
    alert('out of switch');
  };

    const [findTeam, {error}] = useMutation(QUERY_STATS)
  console.log("Hello")

  const handleFormSubmit = async (e) => {

    try {
      const {data} = findTeam({
        variables: {code: e.target.id}
      }).then((result) =>{
        console.log(result.data);
        renderStats(e.target.id, JSON.stringify(result));

      })
    } catch (error) {
      throw error;
    }
  }

  return (
  <section>
    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="10"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="11"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="12"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="13"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="14"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="15"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="16"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="17"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="18"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="19"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="20"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="21"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="22"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="23"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="24"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="25"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="26"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="27"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="28"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="29"></li>
      <li data-target="#carouselExampleCaptions" data-slide-to="30"></li>
    </ol>
    <div className="carousel-inner">
    <div className="carousel-item active animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4503421.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="ARI" onClick={handleFormSubmit}>Arizona Cardinals</h5>
        </div>
    </div>
    <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4503530.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="BAL" onClick={handleFormSubmit}>Baltimore Ravens</h5>
        </div>
    </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4509031.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="BUF" onClick={handleFormSubmit}>Buffalo Bills</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4508984.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="CAR" onClick={handleFormSubmit}>Carolina Panthers</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4509008.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="CHI" onClick={handleFormSubmit}>Chicago Bears</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Free-Images-Bengals-Logo-Wallpapers.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="CIN" onClick={handleFormSubmit}>Cincinnati Bengals</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://www.pixelstalk.net/wp-content/uploads/2016/06/Photos-Cleveland-Browns-Wallpapers.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="CLE" onClick={handleFormSubmit}>Cleveland Browns</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://www.hdwallpaper.nu/wp-content/uploads/2016/12/dallas_cowboys-11.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="DAL" onClick={handleFormSubmit}>Dallas Cowboys</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://cdn.wallpapersafari.com/23/76/OJn4xU.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="DEN" onClick={handleFormSubmit}>Denver Broncos</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4524707.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="DET" onClick={handleFormSubmit}>Detroit Lions</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://images.alphacoders.com/105/1055336.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="GB" onClick={handleFormSubmit}>Green Bay Packers</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://cdn.wallpapersafari.com/34/60/pvs6L3.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="HOU" onClick={handleFormSubmit}>Houston Texans</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://cdn.wallpapersafari.com/32/69/Qb4TPu.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="IND" onClick={handleFormSubmit}>Indianapolis Colts</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="http://blog.hdwallsource.com/wp-content/uploads/2016/05/jacksonville-jaguars-desktop-wallpaper-52939-54660-hd-wallpapers.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="JAX" onClick={handleFormSubmit}>Jacksonville Jaguars</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp1854981.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="KC" onClick={handleFormSubmit}>Kansas City Chiefs</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/WCj0JZu.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="LV" onClick={handleFormSubmit}>Las Vegas Raiders</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4535051.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="LAC" onClick={handleFormSubmit}>Los Angeles Chargers</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4535057.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="LAR" onClick={handleFormSubmit}>Los Angeles Rams</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4501758.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="MIA" onClick={handleFormSubmit}>Miami Dolphins</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://cdn.wallpapersafari.com/95/89/ilIrwW.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="MIN" onClick={handleFormSubmit}>Minnesota Vikings</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp1810625.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="NE" onClick={handleFormSubmit}>New England Patriots</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp5988973.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="NO" onClick={handleFormSubmit}>New Orleans Saints</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp1813881.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="NYG" onClick={handleFormSubmit}>New York Giants</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4543435.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="NYJ" onClick={handleFormSubmit}>New York Jets</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp5231096.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="PHI" onClick={handleFormSubmit}>Philadelphia Eagles</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4974951.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="PIT" onClick={handleFormSubmit}>Pittsburgh Steelers</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://images7.alphacoders.com/106/1063939.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="SF" onClick={handleFormSubmit}>San Francisco 49ers</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapertag.com/wallpaper/full/e/9/5/111499-seattle-seahawks-wallpaper-1920x1080-for-ios.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="SEA" onClick={handleFormSubmit}>Seattle Seahwaks</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp1956208.jpg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="TB" onClick={handleFormSubmit}>Tampa Bay Buccaneers</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://wallpapercave.com/wp/wp4551562.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn' id="TEN" onClick={handleFormSubmit}>Tennessee Titans</h5>
        </div>
      </div>
      <div className="carousel-item animate__animated animate__pulse">
        <img src="https://www.prosportsbackgrounds.com/wp-content/uploads/2020/09/2020-nfl-washington-hardwood-desktop.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
          <h5 className='btn wft' id="WAS" onClick={handleFormSubmit}>Washington Football Team</h5>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
    </div>
    <Stats 
      stats={stats}
      setCurrentStats={setCurrentStats}
      currentStats={currentStats}
    ><PageContent>{renderStats(tStats)}</PageContent>
      {renderStats(tStats)}
    </Stats>
  </section>
  );
}

export default Teams;