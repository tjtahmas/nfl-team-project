import React from 'react';

const PageContent = (stats) => {

  return (
    <div>
        <h3>Team Name</h3>
        <h5>Here's your teams best stats:</h5>
        <ul>
            <li>Stat 1</li>
            <li>Stat 2</li>
            <li>Stat 3</li>
        </ul>
        <h5>There's room for improvement:</h5>
        <ul>
            <li>Stat 1</li>
            <li>Stat 2</li>
            <li>Stat 3</li>
        </ul>
    </div>
  );
};

export default PageContent;