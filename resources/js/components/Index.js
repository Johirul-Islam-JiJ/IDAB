import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar/nav';
import Footer from './footer/Footer';
function Index() {
    return (
        <div className="container">
            <Nav />
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
