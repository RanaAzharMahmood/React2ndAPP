// import logo from './logo.svg';
import './App.css';
import Counter from './testComponents/Counter';
import ClickCounter from './testComponents/ClickCounter';
import HoverCounter from './testComponents/HoverCounter';
import User from './testComponents/User';
// import ClickCounter from './components/ClickCounter';
// import ERRORS from './components/Errors_b';
// import Hero from './components/Hero';
// import HoverCouter from './components/HoverCouter';
// import Hello_World from './components/Hello_World';
// import FORM_HANDLER from './components/FormHandler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >           Learn React
        </a>
        */}

        <User name = {(isLoggedIn) => isLoggedIn ? 'Person' : 'Guest'} />
        <Counter  render = {(count, incrementChanges) => <ClickCounter   count = {count} incrementChanges = {incrementChanges} /> }/>

        {/* <ClickCounter name = "Raja"/> */}
        {/* <HoverCouter name = "Pushpa"/> */}
        {/* <ERRORS >
          <Hero heroName = "Spartan"/>
        </ERRORS>
        <ERRORS>
          <Hero heroName = "Persian"/>
        </ERRORS>
        <ERRORS>
          <Hero heroName = "Joker"/>
        </ERRORS>
        <ERRORS>
          <Hero heroName = "Batman"/>
        </ERRORS> */}
        {/* <div className = "left-align">
          <Hello_World className = {false} />
        </div>
        <div className = "right-align">
          <FORM_HANDLER />
        </div> */}
      </header>
    </div>
  );
}

export default App;
