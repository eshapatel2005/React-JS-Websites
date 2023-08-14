import logo from './logo.svg';
import './App.css';
import  Navs from './components/fronted';

function App() {

  let obj={
    url:'https://image.shutterstock.com/image-vector/globe-icon-vector-isolated-on-260nw-457679374.jpg',
    home:'Home',
    about:'About',
    product:'Product'
  }
  return (
   <Navs {...obj}></Navs>
  );
}

export default App;
