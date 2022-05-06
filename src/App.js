import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Routes from './components/Routes'

function App() {
  return (
    <div className="font-poppins w-full">
      <header>
        <Navbar/> 
      </header>
      <main>
        <Routes/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
