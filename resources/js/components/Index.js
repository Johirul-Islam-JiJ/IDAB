import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './navbar/nav';
import Footer from './footer/Footer';

function Index() {
    return (
        <div className="container">
            <Nav />
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1>Welcome To IDAB</h1>
                        </div>

                        <div className="card-body">
                            <h4>Interior Design Association Of Bangladesh</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
