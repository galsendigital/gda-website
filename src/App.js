import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefit from './components/Benefit';
import Footer from './components/Footer';
import Services from './components/Services';

function App() {
  return (
    <div className="App w-full flex flex-col flex-wrap justify-center items-center">
      <Header />
      <main className="w-full flex flex-col flex-wrap justify-center items-center">
        <Hero />
        <Benefit />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
