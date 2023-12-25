import './App.css';
import { useState } from 'react';



function Buttona({onClick}) {
  return (
    <button className='butona' type='button' onClick={onClick} >
      Ana Buttona, Ana Buttona
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ping Pongha</h1>
        <p>you clicked times {count}</p>
        <Buttona onClick={handleClick}/>
      </header>
    </div>
  );
}

export default App;
