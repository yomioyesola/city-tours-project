import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList';

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
