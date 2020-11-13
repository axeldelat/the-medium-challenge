import './App.css';
// import Posts from './components/Posts';
// import MediumPosts from './components/MediumPosts';
import Nav from './components/Nav'
import Test from './components/Test'
import Test2 from './components/Test2'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetail from './components/ItemDetail'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      
      </header> */}
      <BrowserRouter>
      <Nav/>
        <Switch>
        <Route path="/test" component={Test}/>
        <Route path="/test2" component={Test2}/>
        <Route path="/Nav/:id" component={ItemDetail}/>
        </Switch>
      {/* <MediumPosts /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
