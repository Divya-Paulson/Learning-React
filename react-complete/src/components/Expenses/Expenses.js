import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../NewExpense/ExpensesFilter';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <div>

            <Card className="expenses">

                <ExpensesFilter selected={ filteredYear } onChangeFilter={ filterChangeHandler } />
                {
                    props.items.map((expense) => (
                        <ExpenseItem
                            title={ expense.title }
                            amount={ expense.amount }
                            date={ expense.date } />
                    ))
                }
                {/* {
            expenses.forEach(expense => <ExpenseItem
                title={ expense.title }
                amount={ expense.amount }
                date={ expense.date }>
            </ExpenseItem>)
        } */}

            </Card>

        </div>
    );

}

export default Expenses;