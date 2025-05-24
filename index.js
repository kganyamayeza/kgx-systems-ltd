// backend/src/controllers/index.js

// Import all controllers here
const UserController = require('./userController')
const WorkflowController = require('./workflowController')
const PaymentController = require('./paymentController')

// Export them as an object
module.exports = {
    UserController: UserController,
    WorkflowController: WorkflowController,
    PaymentController: PaymentController
}
// If you add more controllers, just stick them in here above