import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './Components/Photo'
import Name from './Components/Name'
import Buttons from './Components/Buttons'
import About from './Components/About';
import Interests from './Components/Interests';
import Footer from './Components/Footer';


 export default function App() {
  return (
      <div >
          <Photo />
          <div class="content">
            <Name />
            <Buttons />
            <About />
            <Interests />
          </div>
          <Footer />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))