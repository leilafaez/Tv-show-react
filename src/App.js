import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { allShows } from './data/shows';


function App() {

  const[content,setContent]=useState(allShows);
  const [isVisible, setVisible] = useState(false);
  let handleVisible = (currentVisibility) => {
    setVisible(currentVisibility);
  };
  return (
    <div className="App">
      <Header setContent={setContent} isVisible={isVisible} handleVisible={handleVisible} />
      <Cards content={content} setContent={setContent} handleVisible={handleVisible}  />
      <Footer />
    </div>
  );
}

export default App;
