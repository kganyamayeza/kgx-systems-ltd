import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [workflows, setWorkflows] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWorkflows = async () => {
            try {
                const response = await axios.get('/api/workflows', {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                });
                setWorkflows(response.data);
            } catch (error) {
                console.error('Error fetching workflows:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWorkflows();
    }, [user.token]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <h2>Welcome, {user.name}</h2>
            <h3>Your Workflows</h3>
            <ul>
                {workflows.map(workflow => (
                    <li key={workflow.id}>{workflow.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;