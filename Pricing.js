import React from 'react';

const Pricing = () => {
    return (
        <div className="pricing-page">
            <h1>Pricing Plans</h1>
            <div className="pricing-container">
                <div className="pricing-card">
                    <h2>Freemium</h2>
                    <p>Access to basic features</p>
                    <p>Price: Free</p>
                    <button>Sign Up</button>
                </div>
                <div className="pricing-card">
                    <h2>Premium</h2>
                    <p>Access to all features including AI integration and priority support</p>
                    <p>Price: $19.99/month</p>
                    <button>Upgrade Now</button>
                </div>
            </div>
            <div className="features">
                <h3>Features Comparison</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Freemium</th>
                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Workflow Automation</td>
                            <td>Basic</td>
                            <td>Advanced</td>
                        </tr>
                        <tr>
                            <td>AI Integration</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>Community</td>
                            <td>Priority</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pricing;