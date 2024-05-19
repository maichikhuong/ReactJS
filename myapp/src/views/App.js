import logo from './logo.svg';
import './App.scss';
import LearnUseState from './Hook/useState';
// 2 components: class component/ function component (function, arrow)

function App() {
// const App = () => {
  // JSX

  // const Name = "Khuong"
  // const testObj = {name: 'Khuong', channel: 'KhuongChannel'}
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyComponent />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <LearnUseState />
        
      </header>
    </div>
  );
}

export default App;
