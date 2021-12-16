import logo from './logo.svg';
import './App.css';


function App() {
<<<<<<< Updated upstream
=======
  const [pages] = useState([
    { name: "login" },
    { name: "home" },
    { name: "teams" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

>>>>>>> Stashed changes
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
