import { Switch, Route } from 'react-router-dom';
import BreedList from './containers/breedList';
import BreedDetails from './containers/breedDetails';
import Navbar from './Components/navbar';
import './styles/index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={BreedList} exact />
        <Route path="/:id" component={BreedDetails} />
        <Route>Oooops 404 NOT FOUND</Route>
      </Switch>
    </div>
  );
}

export default App;
