import Register from './Register/Register';
import Login from './Login/Login';
import Startsite from './Startsite';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <main className="App">
        <Register/>
        {/* <Login/> */}
        {/* <Startsite /> */}
      </main>
    </div>
  );
}

export default App;
