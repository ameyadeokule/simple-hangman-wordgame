import React from 'react'
import './App.css'
import Header from './components/Header'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import Words from './components/Words'

function App() {
  return (
    <>
     <Header /> 
     <div className='game-container'>
       <Figure />
       <WrongLetters />
       <Words />
     </div>
    </>
  );
}

export default App;
