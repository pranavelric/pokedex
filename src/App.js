import logo from './logo.svg';
import './styles/App.scss';
import PokemonProvider from './context/PokemonProvider';
import Heading from './components/Heading/Heading';
import {withRouter} from './utils/withRouter';
import Navigation from './components/Navigation/Navigation';
import {Routes, Route, Navigate} from 'react-router-dom'
import generations from './data/generations';
import PokedexView from './components/PokedexView/PokedexView';

function App() {
  return (
      <PokemonProvider>
        <div className="pokedex_app">
          <Heading/>
          <Navigation/>
            <Routes>
                <Route exact path='/' element={ <Navigate  to= {generations[0].link} /> }/> 
                {
                  generations.map(({id,link})=>(
               
          <Route key={ id } exact path={ '/' + link } element={<PokedexView generation={id} />}/>
                  ))
                }
            </Routes>


        </div>
      
      </PokemonProvider>
 );
}

export default withRouter(App);
