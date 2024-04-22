import logo from './logo.svg';
import './App.css';
import { Title } from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          E <code>src/App.js</code> and save to reload.
        </p>
        <Title p="aa"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <span>Hello</span>
      </header>
    </div>
  );
}

export default App;
