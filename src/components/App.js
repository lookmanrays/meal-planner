import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import './App.css';
import MealPlanner from '../modules/mealPlanner/components/MealPlanner';

function App(props) {
  return (
    <div className="App">
      <Header />
      <MealPlanner />
      <Footer />
    </div>
  );
}

export default App;
