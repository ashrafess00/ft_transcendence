import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min";


function Button() {
  return (
    <button className='btn btn-primary'>ana butona! ana butona!</button>
  )
}

function Login() {
  return (
    <main className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h1 className='mb-5 text-danger'>hello there</h1>
      <Button />
    </main>
  )
}



function App() {
  return (
  <div className='k w-100 d-flex justify-content-center align-items-center'>
    <Login />
  </div>
  );
}

export default App;
