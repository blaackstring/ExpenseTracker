import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js';
import { addExpense, DeleteExpenses, showallExpenses, UpdateExpenses } from '../controllers/transactionController.js';


const Expenseroute=express.Router();


Expenseroute.post('/add-expenses',authMiddleware,addExpense);
Expenseroute.get('/all-expenses',authMiddleware,showallExpenses);
Expenseroute.delete('/delete-expense/:expenseId',authMiddleware,DeleteExpenses);
Expenseroute.put('/update-expenses/:expenseId',authMiddleware,UpdateExpenses);








export default Expenseroute