import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Pricing from './pages/Pricing';
import Login from './components/Auth/Login';
import WorkflowEditor from './components/Workflow/WorkflowEditor';
import Upgrade from './components/Premium/Upgrade';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/login" component={Login} />
          <Route path="/workflow" component={WorkflowEditor} />
          <Route path="/upgrade" component={Upgrade} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;