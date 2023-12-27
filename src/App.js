import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';

function Button({onClick}) {

  return (
    <button className='btn btn-primary' onClick={onClick}>ana butona!</button>
  )
}

function Login({col, onClick}) {
  return (
    <main className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='mb-5 text-danger display-1'>hello {col === 1 ? "Ashraf" : col === 2 ? "Khalid" : col === 3 ? "l3yoni" : "houssam"}</h1>
      <p className='text-white'>lyoma nhackiw react wdjango</p>
      <Button onClick={onClick}/>
    </main>
  )
}



function App() {
  const [col, setCol] = useState(1)

  function handleClick() {
    if (col === 1)
      setCol(2);
    else if (col === 2)
      setCol(3)
    else if (col === 3)
      setCol(4)
    else
      setCol(1)

  }

  return (
  <div className='k w-100 d-flex justify-content-center align-items-center'>
    <Login col={col} onClick={handleClick}/>
  </div>
  );
}

export default App;
