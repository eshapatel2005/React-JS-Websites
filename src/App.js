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
   contact:"CONTACT",
   text:"Welcome To Bizland",
   button:"GET STARTED",
   video:"WATCH VIDEO",
   abouts:"ABOUT",
   service:"SERVICES"
  }
  
  return (
    <Navs {...obj}></Navs>
  );
}

export default App;
