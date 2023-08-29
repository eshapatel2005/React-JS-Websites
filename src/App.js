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
   team:"TEAMs",
   dropdown:"Drop Down",
   contact:"CONTACT",
   text:"Welcome To Bizland",
   button:"GET STARTED",
   video:"WATCH VIDEO",
   abouts:"ABOUT",
   service:"SERVICES",
   pricing:"PRICING",
   faq:"F.A.Q",
   heading:"Join Our NewsLatters",
   address:"Our Address",
   email:"Our Email",
   call:"Call US",
   submitbutton:"SUBMIT",
   img:"https://seeklogo.com/images/T/twitter-icon-circle-black-logo-35827D553B-seeklogo.com.png",
   img1:"https://www.teachology.ca/wp-content/uploads/2018/08/rawpixel-678089-unsplash.jpg",
   img2:"https://www.teachology.ca/wp-content/uploads/2018/08/rawpixel-678089-unsplash.jpg",
   img3:"https://workspace.digital/wp-content/uploads/2020/02/photo-of-woman-using-laptop-3194518.jpg",
   img4:"https://images.pexels.com/photos/3688761/pexels-photo-3688761.jpeg?cs=srgb&dl=pexels-helena-lopes-3688761.jpg&fm=jpg"
  }
  
  return (
    <Navs {...obj}></Navs>
  );
}

export default App;
