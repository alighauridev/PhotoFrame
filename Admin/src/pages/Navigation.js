import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; // Import the CSS file for styles

const Navigation = () => {
    return (
        <div className="professional-page">
            <nav className="navigation">
                <ul className="navigation-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/frames">My Frames</Link></li>
                    <li><Link to="/artworks">My Arts</Link></li>
                    <li><Link to="/new-frames">New Frames</Link></li>
                    <li><Link to="/new-artwork">New Artworks</Link></li>
                    <li><Link to="/frame-inquiries">Frame Inquiries</Link></li>
                    <li><Link to="/artwork-inquiries">Artwork Inquiries</Link></li>
                </ul>
            </nav>

        </div>
    );
};

export default Navigation;
