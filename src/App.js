import logo from './logo.svg';
import './styles/App.scss';
import PokemonProvider from './context/PokemonProvider';
import Heading from './components/Heading/Heading';
import {withRouter} from './utils/withRouter';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
      <PokemonProvider>
        <div className="pokedex_app">
          <Heading/>
          <Navigation/>
          

        </div>
      
      </PokemonProvider>
 );
}

export default withRouter(App);
