import React, { useState } from 'react';

function Home() {

  // Replace links with deployed projects and GitHub repos
  // const [projects] = useState([
  //   {
  //     name: 'Event Search',
  //     description: '"Technologies"',
  //     link: "https://llh9.github.io/Event-Search/",
  //     repo: "https://github.com/llh9/Event-Search"
  //   },
  //   {
  //     name: 'Password Generator',
  //     description: '"Technologies"',
  //     link: "https://llh9.github.io/Password-Generator/",
  //     repo: "https://github.com/llh9/Password-Generator"
  //   },
  //   {
  //     name: 'Random Quiz',
  //     description: '"Technologies"',
  //     link: "https://llh9.github.io/Random-Quiz/",
  //     repo: "https://github.com/llh9/Random-Quiz"
  //   }
  // ]);

  return (
    <div>
      {/* <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
