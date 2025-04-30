import { Expense } from "../models/expense.model.js"

export const addExpense = async (req, res) => {
    try {
        console.log(req.body);
        const { SpendOn, amount, date, description, category } = req.body
        
        
        const userid = req.user.id
        console.log(userid);



        if (!SpendOn || !amount || !date || !category) return res.status(400).send({ success: false, message: 'Enter All Required Details' });


        const addExpenseData = new Expense({
            SpendOn,
            description,
            amount,
            date,
            category: category,
            userid

        })

        await addExpenseData.save()

        return res.status(200).send({ success: true, addExpenseData, message: "Expense Added Successfully" })



    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error while adding expense",
        });

    }
}


export const showallExpenses = async (req, res) => {
    try {

        const userid = req.user.id

        const allExpenses = await Expense.find({ userid }).sort({date:-1});
        console.log(allExpenses);

        if (allExpenses.length === 0) {
            return res.status(400).send({ success: false, message: 'No Expenses Found' });
        }


        return res.status(200).send({ allExpenses, success: true, message: "Expense Added Successfully" })
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Error while getting Expenses",
        });

    }

}

export const DeleteExpenses = async (req, res) => {
    try {

        const expenseid = req.params.expenseId


        if (!expenseid) return res.status(400).send({ success: false, message: 'ExpenseId  not Found' });


        const isExpenseExist = await Expense.findOneAndDelete({
            $and: [{ _id: expenseid },
            { userid: req.user.id }
            ]
        });

        if (!isExpenseExist) return res.status(400).send({ success: false, message: 'Expense with this id  not Found' });

        return res.status(200).send({ success: true, message: "Expense Deleted Successfully" })
    } catch (error) {

        return res.status(500).send({
            success: false,
            message: "Error while Deleting Expense",
        });

    }





}



export const UpdateExpenses = async (req, res) => {
    try {

        const expenseid = req.params.expenseId;
        const { SpendOn, amount, date, description, categoryType } = req.body
        console.log(SpendOn, amount, date, description, categoryType ,expenseid);
        


        if (!expenseid) return res.status(400).send({ success: false, message: 'ExpenseId  not Found' });


        const isExpenseExist = await Expense.findOneAndUpdate({
            _id: expenseid,
            userid: req.user.id

        }  ,
            {
                $set: {
                    SpendOn,
                    description,
                    amount,
                    date,
                    category: categoryType,
                }
            }, { new: true }
        );
        console.log(isExpenseExist);
        

        if (!isExpenseExist) return res.status(400).send({ success: false, message: 'Expense with this id  not Found' });

        return res.status(200).send({ success: true, message: "Expense Updated Successfully" })
    } catch (error) {

        return res.status(500).send({
            success: false,
            message: "Error while Updating Expense",
        });

    }
}