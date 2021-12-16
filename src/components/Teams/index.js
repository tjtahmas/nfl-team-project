import React, {useState} from 'react';

function Teams() {
    const [teams] = useState([
        {
            name: 'Arizona Cardinals'
        },
        {
            name: 'Atlanta Falcons'
        },
        {
            name: 'Baltimore Ravens'
        },
        {
            name: 'Buffalo Bills'
        },
        {
            name: 'Carolina Panthers'
        },
        {
            name: 'Chicago Bears'
        },
        {
            name: 'Cincinnati Bengals'
        },
        {
            name: 'Cleveland Browns'
        },
        {
            name: 'Dallas Cowboys'
        },
        {
            name: 'Denver Broncos'
        },
        {
            name: 'Detroit Lions'
        },
        {
            name: 'Green Bay Packers'
        },
        {
            name: 'Houston Texans'
        },
        {
            name: 'Indianapolis Colts'
        },
        {
            name: 'Jacksonville Jaguars'
        },
        {
            name: 'Kansas City Chiefs'
        },
        {
            name: 'Las Vegas Raiders'
        },
        {
            name: 'Los Angeles Chargers'
        },
        {
            name: 'Los Angeles Rams'
        },
        {
            name: 'Miami Dolphins'
        },
        {
            name: 'Minnesota Vikings'
        },
        {
            name: 'New England Patriots'
        },
        {
            name: 'New Orleans Saints'
        },
        {
            name: 'New York Giants'
        },
        {
            name: 'New York Jets'
        },
        {
            name: 'Philadelphia Eagles'
        },
        {
            name: 'Pittsburgh Steelers'
        },
        {
            name: 'San Francisco 49ers'
        },
        {
            name: 'Seattle Seahwaks'
        },
        {
            name: 'Tampa Bay Buccaneers'
        },
        {
            name: 'Tennessee Titans'
        },
        {
            name: 'Washington Football Team'
        },
    ]);
   
    return (
        <div>
            <ul>
                <li> {teams} </li>
            </ul>
        </div>
    );
}

export default Teams;