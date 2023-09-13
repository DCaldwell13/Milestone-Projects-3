import React from 'react';
import './styles.css';
import NavBar from './components/NavBar';
import Homepage from './components/Homepage';
import ShopCategory from './components/ShopCategory';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <main>
        <Homepage />
        <ShopCategory />
        <About />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;

/* In this component structure, we import the necessary components (`NavBar`, `Homepage`, `ShopCategory`, `About`, `Contact`, and `Footer`) and place them within the `App` component. These components are then rendered within the `div` with the class `App`.

To make this structure work, make sure to have separate files for each component in the `./components` directory (`NavBar.js`, `Homepage.js`, `ShopCategory.js`, `About.js`, `Contact.js`, and `Footer.js`). */
