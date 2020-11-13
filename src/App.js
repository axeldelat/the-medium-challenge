import './App.css';
import Nav from './Components/Nav'
import Test from './Components/Test'
import Test2 from './Components/Test2'
import {BrowserRouter, Switch,Route,Link} from 'react-router-dom'
import ItemDetail from './Components/ItemDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Switch>
        <Route path="/test" component={Test}/>
        <Route path="/test2" component={Test2}/>
        <Route path="/Nav/:id" component={ItemDetail}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
