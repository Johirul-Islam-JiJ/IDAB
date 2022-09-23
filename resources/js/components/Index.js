import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer/Footer';

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Welcome To IDAB</div>

                        <div className="card-body">Interior Design Association Of Bangladesh</div>
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
