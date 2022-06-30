import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefit from './components/Benefit';
function App() {
  return (
    <div className="App w-full flex flex-col flex-wrap justify-center items-center">
      <Header />
      <main className="w-full flex flex-col flex-wrap justify-center items-center">
        <Hero />
        <Benefit />
      </main>
    </div>
  );
}

export default App;
