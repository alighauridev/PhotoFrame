import React, { useState } from 'react';
import '../scss/inquiry.scss';
import axios from '../api/axios';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
function InquiryForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const artwork = useSelector((state => state.ArtworkDetails.product._id))
    const frame = useSelector((state => state.ProductDetails.product._id))
    const user = useSelector((state => state.UserLogin.userInfo._id))
    const navigate = useNavigate();
    const { id, mode } = useParams();
    const handleSubmit = async (e) => {
        if (mode === "artwork") {
            e.preventDefault();
            const { data } = await axios.post('/api/contact/artwork', {
                email,
                name,
                phone,
                message,
                artwork,
                user,
            });
            alert(data.message);
            navigate('/artworks-all');
        } else {
            e.preventDefault();
            const { data } = await axios.post('/api/contact/frame', {
                email,
                name,
                phone,
                message,
                frame,
                user,
            });
            alert(data.message);
            navigate('/frames-all');
        }
    };
    console.log(id);

    return (
        <div className="inquiry-form">
            <h2>Inquiry Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input type="number" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <button type="submit" style={{
                    width: '100%',
                    margin: '40px 0',
                    padding: '15px 0',
                    background: '#272727',
                    color: 'white',
                    border: 'none'
                }}>Submit</button>
            </form>
        </div>
    );
}

export default InquiryForm;
