
import { Route, Switch } from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Details from './components/Details';
import Wheather from './components/Wheather';
import Navbar from "./components/Navbar";
import  './style.css'
import Footer from './components/Footer';
function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch> 
     <Route exact path='/' component={Wheather} />
     <Route path="/detail" component={Details}/>
     
     </Switch>
     <Footer/>
     
     </div>
  );
}

export default App;
