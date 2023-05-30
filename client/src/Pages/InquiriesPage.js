import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Table, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
const InquiriesPage = () => {
    const [inquiries, setInquiries] = useState([]);
    const user = useSelector(state => state.UserLogin.userInfo?._id)
    useEffect(() => {
        const fetchInquiries = async () => {
            const res = await axios.post("/api/contact/frame-inquiries", { user: user }); // replace with your endpoint
            setInquiries(res.data);
        };

        fetchInquiries();
    }, []);

    return (
        <>
            <Container>
                <h1>Frame Inquiries</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Inquiry ID</th>
                            <th>User Name</th>
                            <th>Inquiry Name</th>
                            <th>Phone</th>
                            <th>Message</th>
                            <th>Frame Title</th>
                            <th>Frame Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inquiries.map((inquiry) => (
                            <tr key={inquiry._id}>
                                <td>{inquiry._id}</td>
                                <td>{inquiry.user.name}</td>
                                <td>{inquiry.name}</td>
                                <td>{inquiry.phone}</td>
                                <td>{inquiry.message}</td>
                                <td>{inquiry.frame.title}</td>
                                <td>
                                    <img
                                        src={inquiry.frame.image}
                                        alt={inquiry.frame.title}
                                        style={{ maxWidth: "100px" }}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default InquiriesPage;
