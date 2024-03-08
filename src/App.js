import './App.css';
const logo = '/logo-lightmode.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          MAPS Spring Challenge
        </h1>
        <img src={logo} className="Maps-logo" alt="logo" />
        <a
          className="Repo-link"
          href="https://github.com/Martiwj/Spring-Challenge.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spring Challenge repo
        </a>
      </header>
    </div>
  );
}

export default App;
