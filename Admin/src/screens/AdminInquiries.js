import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f0f0f0;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f8f8f8;
  }
`;

const TableHeading = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const AdminInquiries = () => {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await axios.get("/api/contact/all");
                setInquiries(response.data);
            } catch (error) {
                console.error("Error fetching inquiries", error);
            }
        };

        fetchInquiries();
    }, []);

    return (
        <Container>
            <Title>Admin Inquiries</Title>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeading>Name</TableHeading>
                        <TableHeading>Email</TableHeading>
                        <TableHeading>Message</TableHeading>
                    </TableRow>
                </TableHead>
                <tbody>
                    {inquiries.map((inquiry) => (
                        <TableRow key={inquiry._id}>
                            <TableCell>{inquiry.name}</TableCell>
                            <TableCell>{inquiry.email}</TableCell>
                            <TableCell>{inquiry.message}</TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminInquiries;
