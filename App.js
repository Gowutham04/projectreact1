// import React from 'react';
// import Navbar from './Navbar';
// import './App.css';
// import Home from './Home';
// import Footer from './Footer';
// import StylishSearchBar from './StylishSearchBar';
// import GardeningList from './GardeningList';
// import { Route, Router } from 'react-router-dom';
// const App = () => {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path='about' element={<About/>}/>
//       </Routes>
//     </Router>
//     <div className="App">
//       <Navbar />
//       {/* Your main content goes here */}
//       <main>
//         <h2>Main Content</h2>
        
        
//         {/* Add your main content components */}
//       </main>

//     </div><></>
//         <div className="App">
        
//         </div>
//         <div className="App">
//           <StylishSearchBar>
            
//           </StylishSearchBar>
//         </div>
//     <div className="App">
//         <Home>

//         </Home>
//        <div>
//         <GardeningList>

          
//         </GardeningList>
//        </div>
//         <div className="app">
//           <Footer>
            
//           </Footer>
//         </div>
       
//       </div></>
//   );
// };
// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import StylishSearchBar from './StylishSearchBar';
import GardeningList from './GardeningList';
import About from './About'; // Make sure to import the About component
import './App.css';
import Contact from './Contact';
import Mainx from './Mainx';

const App = () => {
  return (
    <Router>
      <div className="App"></div>
        <Navbar />
        {/* Your main content goes here */}
        <main>
          <h2>Main Content</h2>
          {/* Add your main content components */}
        </main>

        <Routes>
          <Route path='/' element={<Mainx/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          {/* Add more routes as needed */}
        </Routes>
    </Router>
  );
};

export default App;
