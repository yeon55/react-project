import ExpenseForm from '../NewExpense/ExpenseForm';
import './ExpenseFilter.css';

const ExpensesFilter = () => {
    const dropdownChangeHandler = (e) => {
        console.log(e.target.value);
    };
    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={dropdownChangeHandler}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;