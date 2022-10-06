import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar/nav';
import Footer from './footer/Footer';
import Contact from './contact/Contact';
import AppRouter from './AppRouter';
import About from './about/About';
function Index() {
    return (
        <div className="container">
            <AppRouter />
            <Nav />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
