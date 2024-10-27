import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => { //to check git push
    return (
        <div className="container-fluid p-5" style={{ background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', minHeight: '100vh' }}>
            <div className="text-center text-white">  
                <h1 className="display-3 font-weight-bold mb-4">Welcome to Our Amazing Platform!</h1>
                <p className="lead mb-5" style={{ fontSize: '1.25rem' }}>
                    Discover a world of possibilities. Our platform is here to help you achieve your goals with style and ease.
                    Dive in and explore what we have to offer. You'll love the experience!
                </p>
                <div className="d-flex justify-content-center">
                    <button className="btn btn-lg btn-light mx-3" style={{ backgroundColor: '#ff6f61', color: '#fff' }}>
                        Explore Features
                    </button>
                    <button className="btn btn-lg btn-outline-light mx-3" style={{ borderColor: '#fff', color: '#fff' }}>
                        Contact Us
                    </button> 
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm h-100" style={{ backgroundColor: '#ff9a9e' }}>
                        <div className="card-body text-center text-white">
                            <h5 className="card-title">Feature 1</h5>
                            <p className="card-text">
                                Discover the first feature of our platform, designed to make your experience seamless.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm h-100" style={{ backgroundColor: '#a18cd1' }}>
                        <div className="card-body text-center text-white">
                            <h5 className="card-title">Feature 2</h5>
                            <p className="card-text">
                                Explore this amazing feature and see how it can help you achieve more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm h-100" style={{ backgroundColor: '#fbc2eb' }}>
                        <div className="card-body text-center text-white">
                            <h5 className="card-title">Feature 3</h5>
                            <p className="card-text">
                                Experience the third feature that makes our platform unique and user-friendly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
