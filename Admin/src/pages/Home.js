import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for styles
import Navigation from './Navigation';

const Home = () => {
    return (
        <div className="professional-page">
            <Navigation />
            <h1 className="welcome-heading">Welcome Admin</h1>
            <section className="button-section">
                <Link to="/frame/upload" className="button">Upload Frame</Link>
                <Link to="/artwork/upload" className="button">Upload Artwork</Link>
            </section>
        </div>
    );
};

export default Home;
