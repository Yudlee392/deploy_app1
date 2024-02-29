import express from 'express'
import { registerValidator, loginValidator } from '../middlewares/auth.middlewares.js'

// Create an instance of the router for authentication-related routes
const authRouter = express.Router()

// Login Route
// Path: /api/auth/login
// Method: POST
// Access: Public
authRouter.post('/login', loginValidator, (req, res) => {
  // Logic for user login
})

// Register Route
// Path: /api/auth/register
// Method: POST
// Access: Public
authRouter.post('/register', registerValidator, (req, res) => {
  // Logic for user registration
})

// Logout Route
// Path: /api/auth/logout
// Method: POST
// Access: Public
authRouter.post('/logout', (req, res) => {
  // Logic for user logout
})

// Export the authentication router
export default authRouter
