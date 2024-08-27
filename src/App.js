import React from 'react';
import './App.css'; 
import HomeView from './component/HomeView'; 
import img from './tn police logo.png';
import banner from './banner.jpeg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='d-flex mx-4 align-items-center'>
       <img src={img} alt="tn police logo" id='policeLogo'></img>
       <p className='h1 mx-4'> District Police</p></div>
       <img src={banner} id="nav_banner"></img>
      </header>
      <div>
      <h1 className="h1 text-center mt-3 mb-4">Home Page</h1>
      <HomeView />
    </div></div>
  );
}
export default App;
