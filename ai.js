const axios = require('axios');

const AI_SERVICE_URL = 'https://api.example.com/ai'; // Replace with actual AI service URL

// Function to get AI-generated suggestions for workflows
const getWorkflowSuggestions = async (inputData) => {
    try {
        const response = await axios.post(`${AI_SERVICE_URL}/suggestions`, { data: inputData });
        return response.data;
    } catch (error) {
        console.error('Error fetching AI suggestions:', error);
        throw new Error('Unable to fetch AI suggestions');
    }
};

// Function to analyze workflow performance
const analyzeWorkflowPerformance = async (workflowData) => {
    try {
        const response = await axios.post(`${AI_SERVICE_URL}/analyze`, { data: workflowData });
        return response.data;
    } catch (error) {
        console.error('Error analyzing workflow performance:', error);
        throw new Error('Unable to analyze workflow performance');
    }
};

// Exporting the functions for use in controllers
module.exports = {
    getWorkflowSuggestions,
    analyzeWorkflowPerformance,
};