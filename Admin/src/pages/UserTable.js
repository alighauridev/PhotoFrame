import React, { useEffect, useState } from 'react';
import axios from '../api/axiosa';

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUsers();
    }, []);

    const handleFrameClick = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setSelectedUser(null);
        setShowModal(false);
    };

    return (
        <div className="container mx-auto py-4">
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>View Artworks/Frames</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} >
                            <td>
                                <div className="d-flex align-items-center">
                                    <img
                                        src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                        alt=""
                                        style={{ width: '45px', height: '45px' }}
                                        className="rounded-circle"
                                    />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{user.name}</p>
                                        <p className="text-muted mb-0">{user.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="fw-normal mb-1">{user.isAdmin ? 'Admin' : 'User'}</p>
                            </td>

                            <td>
                                <button onClick={() => {
                                    setSelectedUser(user);
                                    setShowModal(true);
                                }} type="button" className="btn btn-link btn-sm btn-rounded">
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showModal && selectedUser && (
                <div className="modal" style={{ display: 'block' }}>
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedUser.name}'s Frames and Artworks</h5>
                                <button type="button" className="close" onClick={handleCloseModal}>
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <h6>Frames:</h6>
                                <div className="row">
                                    {selectedUser.frames.map((frame) => (
                                        <div key={frame._id} className="col-md-3 mb-4">
                                            <div className="card">
                                                <img src={frame.image} style={{ height: "150px", objectFit: 'contain' }} alt={frame.title} className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{frame.title}</h5>
                                                    <p className="card-text">{frame.description}</p>
                                                    <p className="card-text">Price: {frame.price}</p>
                                                    {/* Add other frame details */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <h6>Artworks:</h6>
                                <div className="row">
                                    {selectedUser.artworks.map((artwork) => (
                                        <div key={artwork._id} className="col-md-3 mb-4">
                                            <div className="card">
                                                <img src={artwork.image} style={{ height: "150px", objectFit: 'contain' }} alt={artwork.title} className="card-img-top" />
                                                <div className="card-body">
                                                    <h5 className="card-title">{artwork.title}</h5>
                                                    <p className="card-text">{artwork.description}</p>
                                                    <p className="card-text">Price: {artwork.price}</p>
                                                    {/* Add other artwork details */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserTable;
