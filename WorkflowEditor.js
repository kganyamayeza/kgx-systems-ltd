import React, { useState } from 'react';
import axios from 'axios';

const WorkflowEditor = () => {
    const [workflowName, setWorkflowName] = useState('');
    const [workflowSteps, setWorkflowSteps] = useState(['']);
    
    const handleStepChange = (index, value) => {
        const newSteps = [...workflowSteps];
        newSteps[index] = value;
        setWorkflowSteps(newSteps);
    };

    const addStep = () => {
        setWorkflowSteps([...workflowSteps, '']);
    };

    const removeStep = (index) => {
        const newSteps = workflowSteps.filter((_, i) => i !== index);
        setWorkflowSteps(newSteps);
    };

    const saveWorkflow = async () => {
        try {
            const response = await axios.post('/api/workflows', {
                name: workflowName,
                steps: workflowSteps,
            });
            console.log('Workflow saved:', response.data);
        } catch (error) {
            console.error('Error saving workflow:', error);
        }
    };

    return (
        <div>
            <h2>Create Workflow</h2>
            <input
                type="text"
                placeholder="Workflow Name"
                value={workflowName}
                onChange={(e) => setWorkflowName(e.target.value)}
            />
            <h3>Steps</h3>
            {workflowSteps.map((step, index) => (
                <div key={index}>
                    <input
                        type="text"
                        placeholder={`Step ${index + 1}`}
                        value={step}
                        onChange={(e) => handleStepChange(index, e.target.value)}
                    />
                    <button onClick={() => removeStep(index)}>Remove</button>
                </div>
            ))}
            <button onClick={addStep}>Add Step</button>
            <button onClick={saveWorkflow}>Save Workflow</button>
        </div>
    );
};

export default WorkflowEditor;