import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

//import NewExpense from './component/Expenses/NewExpense';
//import Expenses from './component/Expenses/Expenses';

/* const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
*/
const App = () => {
  /*const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };*/
  const [userList,setUserList]=useState([]);
  const HandlAdd=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return([...prevUserList,{name: uName , age: uAge, id: Math.random().toString}]);
    })
  }
  return (
    <div>
      <AddUser onAddUser={HandlAdd}/>
      <UserList users={userList}/>
    </div>
  );
};

export default App;