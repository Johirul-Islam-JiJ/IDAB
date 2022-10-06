import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar/nav';
import Home from './home/Home';
import AppRouter from './AppRouter';
import About from './about/About';
import Footer from './footer/Footer';
function Index() {
    return (
        <div className="container">
            <AppRouter />
            <Nav />
            <Home />
            <About />
            <Footer />


        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
