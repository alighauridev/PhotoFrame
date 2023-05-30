import React, { useState, useEffect } from "react";
import axios from "../api/axiosa";
import { formatDistanceToNow } from 'date-fns';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";

const AdminArtworkPage = () => {
    const [frames, setFrames] = useState([]);

    useEffect(() => {
        fetchFrames();
    }, []);

    const fetchFrames = async () => {
        try {
            const response = await axios.get("/api/artwork/admin/unapproved");
            setFrames(response.data);
        } catch (error) {
            console.error("Error fetching frames:", error);
        }
    };

    const approveFrame = async (id) => {
        try {
            const response = await axios.put(`/api/artwork/admin/${id}/approve`);
            const approvedFrame = response.data;
            setFrames((prevFrames) =>
                prevFrames.map((artwork) =>
                    artwork._id === approvedFrame._id ? approvedFrame : artwork
                )
            );

        } catch (error) {
            console.error("Error approving frame:", error);
        }
    };
    useEffect(() => {
        fetchFrames();
    }, [frames]);

    return (
        <>
            <Navigation />
            <div className="container mt-5">
                <h1>Artwork Page</h1>
                {frames.map((artwork) => (
                    <div key={artwork._id} className="card my-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    {" "}
                                    <h5 className="card-title">Artwork ID: {artwork._id}</h5>
                                    <p className="card-text">Artwork Name: {artwork.title}</p>
                                    <p className="card-text">Artwork Description: {artwork.description}</p>
                                    {artwork.user && <> <p>User Name: {artwork.user.name}</p>
                                        <p>User Email: {artwork.user.email}</p></>}
                                    <p>Created: {formatDistanceToNow(new Date(artwork.createdAt))} ago</p>
                                </div>
                                <div className="col-6">
                                    <div className="img">
                                        <img src={artwork.image} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="card-text">
                                Approved: {artwork.approved ? "Yes" : "No"}
                            </p>
                            {!artwork.approved && (
                                <button
                                    className="btn btn-primary"
                                    onClick={() => approveFrame(artwork._id)}
                                >
                                    Approve Frame
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AdminArtworkPage;
