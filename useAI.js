import { useState, useEffect } from 'react';
import axios from 'axios';

const useAI = () => {
    const [aiResponse, setAiResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchAIResponse = async (inputData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post('/api/ai', { data: inputData });
            setAiResponse(response.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { aiResponse, loading, error, fetchAIResponse };
};

export default useAI;