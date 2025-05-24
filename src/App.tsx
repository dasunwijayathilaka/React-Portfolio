import React from 'react';
import Navbar from './componats/Navbar';
import Home from './componats/Home';
import About from './componats/About';
import Services from './componats/Services';
import Projects from './componats/Projects';
import Contact from './componats/Contact';
import Footer from './componats/Footer';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <main>
                <Home />
                <About />
                <Services />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;