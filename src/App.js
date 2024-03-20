import Register from './Register/Register';
import Login from './Login/Login';
import Startsite from './Startsite';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <main className="App">
        {/* <Register/> */}
        {/* <Login/> */}
        <Startsite />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
