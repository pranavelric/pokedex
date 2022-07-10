import logo from './logo.svg';
import './styles/App.scss';
import PokemonProvider from './context/PokemonProvider';
import Heading from './components/Heading/Heading';
function App() {
  return (
      <PokemonProvider>
        <div className="pokedex_app">
          <Heading/>

        </div>
      
      </PokemonProvider>
 );
}

export default App;
