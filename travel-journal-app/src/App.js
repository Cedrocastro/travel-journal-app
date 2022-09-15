import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import data from "./DataUsed";
import "./App.css";


function App() {
  const posts = data.map(item => {
    return (
      <Main
        key={item.id}
            {...item} 
      />
    )
  })
  
  return (
    <div className='App'>
      <Navbar />
      <section className='main'>
        {posts}
      </section> 
    </div>
  );
}

export default App;
