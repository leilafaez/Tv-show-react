import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { allShows } from './data/shows';


function App() {

  const[content,setContent]=useState(allShows);
  
  const [showId, setShowId] = useState();
  const [isVisible, setVisible] = useState(false);
  let handleVisible = (currentVisibility) => {
    setVisible(currentVisibility);
  };
  return (
    <div className="App">
      <Header content={content} setContent={setContent} isVisible={isVisible} handleVisible={handleVisible} showId={showId} setShowId={setShowId} />
      <Cards content={content} setContent={setContent} handleVisible={handleVisible} setShowId={setShowId}  />
      <Footer />
    </div>
  );
}

export default App;
