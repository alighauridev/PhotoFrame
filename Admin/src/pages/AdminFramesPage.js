import React, { useState, useEffect } from "react";
import axios from "../api/axiosa";
import { formatDistanceToNow } from 'date-fns';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";

const AdminFramesPage = () => {
    const [frames, setFrames] = useState([]);

    useEffect(() => {
        fetchFrames();
    }, []);

    const fetchFrames = async () => {
        try {
            const response = await axios.get("/api/frame/admin/unapproved");
            setFrames(response.data);
        } catch (error) {
            console.error("Error fetching frames:", error);
        }
    };

    const approveFrame = async (id) => {
        try {
            const response = await axios.put(`/api/frame/admin/approve/${id}`);
            const approvedFrame = response.data;
            setFrames((prevFrames) =>
                prevFrames.map((frame) =>
                    frame._id === approvedFrame._id ? approvedFrame : frame
                )
            );
        } catch (error) {
            console.error("Error approving frame:", error);
        }
    };

    return (
        <>
            <Navigation />
            <div className="container mt-5">
                <h1>Admin Frames Page</h1>
                {frames.map((frame) => (
                    <div key={frame._id} className="card my-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-6">
                                    {" "}
                                    <h5 className="card-title">Frame ID: {frame._id}</h5>
                                    <p className="card-text">Frame Name: {frame.title}</p>
                                    <p className="card-text">Frame Description: {frame.description}</p>
                                    <p>User Name: {frame?.user?.name}</p>
                                    <p>User Email: {frame?.user?.email}</p>
                                    <p>Created: {formatDistanceToNow(new Date(frame.createdAt))} ago</p>
                                </div>
                                <div className="col-6">
                                    <div className="img">
                                        <img src={frame.image} className="img-fluid" alt="" />
                                    </div>
                                </div>
                            </div>
                            <p className="card-text">
                                Approved: {frame.approved ? "Yes" : "No"}
                            </p>
                            {!frame.approved && (
                                <button
                                    className="btn btn-primary"
                                    onClick={() => approveFrame(frame._id)}
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

export default AdminFramesPage;
