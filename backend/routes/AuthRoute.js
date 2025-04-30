import express from 'express'
import { login, logout, signup, verify } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';



const authroute=express.Router();


authroute.post('/login',login);
authroute.post('/signup',signup);
authroute.delete('/logout',logout);
authroute.get('/verify',authMiddleware,verify)





export default authroute