import React from 'react'
import './App.css'
import Home from './Home';
import Footer from './Footer';
import StylishSearchBar from './StylishSearchBar';
import GardeningList from './GardeningList';
export default function Mainx() {
  return (
    <div>
        <div className="App">
          {/* Add your additional components */}
        </div>

        <div className="App">
          <StylishSearchBar />
        </div>

        <div className="App">
          <Home />
          <div>
            <GardeningList />
          </div>
          <div className="app">
            <Footer />
          </div>
        </div>
      </div>
  )
}
