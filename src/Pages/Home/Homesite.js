import { Link } from 'react-router-dom';
const logo = '/logo-lightmode.png';

function Home() {
  return (
    <div className="Home">
   
      <header className="App-header">
        <Link to="/">HOME</Link>
        <Link to='/code'>Oppgaver</Link>
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

export default Home;
