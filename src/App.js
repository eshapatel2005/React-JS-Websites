import logo from './logo.svg';
import './App.css';
import  Navs from './components/fronted';
import video from './components/data';

function App() {
  let obj={
   brand:' BizLand..',
   home:'HOME',
   about:'ABOUT',
   service:'SERVICE',
   portfolio:"PORTFOLIO",
   team:"TEAM",
   dropdown:"Drop Down",
   contact:"CONTACT"
  }
  
  return (
    <Navs {...obj}></Navs>
  );
}

export default App;
