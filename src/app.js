import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BreedList from './containers/home';
import BreedDetails from './containers/breedDetails';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={BreedList} exact />
        <Route path="/details/:id" component={BreedDetails} />
        <Route>Oooops 404 NOT FOUND</Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
