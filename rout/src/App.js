import React , { Component } from'react';
import Home from "./components/HomeComponent";
import About from "./components/AboutComponent";
// import Contact from " ./components/ContactComponent";

import Menu from './components/MenuComponent';
 
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Contact from './components/ContactComponent';


import { DISHES } from'./shared/dishes';
import'./App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// import HomeComponent from './components/HomeComponent';

class App extends Component {

constructor(props) {
super(props);
this.state= {
dishes: DISHES
    };
  }

render() {

// const HomePage = () => {
//   return(
//       <Home/>
//   );
// }
// const Contact = () => {
//   return(
//       <Contact/>
//   );
// }

// const About = () => {
//   return(
//       <About/>
//   );
// }
return (
 
<Router>
<div className="App">

<Header/>

<Routes>

<Route path='/home'element={<Home/>}/>

<Route exact path='/menu' element={<Menu dishes={this.state.dishes}/>}/>

<Route exact path='/about' element={<About/>}/>
<Route exact path='/contact'element={<Contact/>}/>

</Routes>
<Footer/>

{/* <Header />
<Menu dishes={this.state.dishes}/>
<Footer /> */}

</div>
</Router>

    );
  }
}

export default App;

