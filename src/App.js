import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Skill from './Components/Skill/Skill';
import Project from './Components/Project/Project';
function App() {
  return(
    <Router>
    <Home/>
    
 
  
    
    <Switch>
       <Route path="/about-me">
      <About/>
    </Route>
    <Route path="/contact">
      <Contact/>
    </Route>
    <Route path="/experience">
      <Experience/>
    </Route>
    <Route path="/skill">
      <Skill/>
    </Route>
    <Route path="/projects">
      <Project/>
    </Route>
    </Switch>
     </Router>

    
  )
 
}

export default App;
