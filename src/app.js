import { Switch, Route } from 'react-router-dom';
import BreedList from './containers/breedList';
import BreedDetails from './containers/breedDetails';
import Navbar from './Components/navbar';
import './styles/index.css';

const App = () => (
  <div>
    <Navbar />
    <Switch>
      <Route exact path="/" component={BreedList} />
      <Route exact path="/details/:id" component={BreedDetails} />
      <Route>Oooops 404 NOT FOUND</Route>
    </Switch>
  </div>
);

export default App;
