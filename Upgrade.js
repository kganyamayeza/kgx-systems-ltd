import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Upgrade = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const handleUpgrade = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/payment/upgrade', { userId: user.id });
            alert('Upgrade successful! Enjoy your premium features.');
        } catch (err) {
            setError('Upgrade failed. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upgrade-container">
            <h2>Upgrade to Premium</h2>
            <p>Unlock exclusive features and enhance your workflow experience.</p>
            <button onClick={handleUpgrade} disabled={loading}>
                {loading ? 'Upgrading...' : 'Upgrade Now'}
            </button>
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Upgrade;