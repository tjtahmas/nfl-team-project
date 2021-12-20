import React, { useState } from 'react';

function Stats(props) {

  return (
      <div>
        {props.children}
      </div>
    // <div>
    //     <h3>Sup</h3>
    //     <h5>Here's your teams best stats:</h5>
    //     <ul>
    //         <li>Stat 1</li>
    //         <li>Stat 2</li>
    //         <li>Stat 3</li>
    //     </ul>
    //     <h5>There's room for improvement:</h5>
    //     <ul>
    //         <li>Stat 1</li>
    //         <li>Stat 2</li>
    //         <li>Stat 3</li>
    //     </ul>
    // </div>
  );
};

export default Stats;