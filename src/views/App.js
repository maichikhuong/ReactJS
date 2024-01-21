import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponents';

function App() {
  // INJECT
  // JSX
  // Fragment
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world with Mai Chi Khuong
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponents />
        {/* <MyComponents></MyComponents> */}
      </header>
    </div>
  );
}

export default App;
