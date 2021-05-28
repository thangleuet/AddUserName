import React, { useState } from 'react'
import Card from './Card'
import classes from './AddUser.module.css'
import Button from './Button'
import ErrorModal from './ErrorModal'
function AddUser(props){
    const [enterusername,setEnterUserName]=useState("");
    
    const [enterage,setEnterAge]=useState("");
    const [error,setError]=useState("");
    const handlName=(event)=>{
        setEnterUserName(event.target.value);
    }
    const handlAge=(event)=>{
        setEnterAge(event.target.value);
    }
    const handlSubmit=(event)=>{
        event.preventDefault();
    
    if(enterusername.trim().length===0 || enterage.trim().length===0){
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age"
        })
        return;
    }
    if(enterage<1){
        setError({
            title: "Invalid Input",
            message: "Please enter a valid name and age >0"
        })
         return;
    }
        props.onAddUser(enterusername,enterage);
        setEnterUserName('');
        setEnterAge('');
    }
    const errorHandl=props=>{
        return setError(null);
    }
    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandl}></ErrorModal>}
        <Card className={classes.input}>
           <form onSubmit={handlSubmit}>
            <label htmlFor="user">User Name </label>
            <input id="user" type="text" value={enterusername} onChange={handlName}/>
            <label htmlFor="age">Age (Year) </label>
            <input id="age" type="number" value={enterage} onChange={handlAge}/>
            <Button type="submit">Add User</Button>
          </form>
        </Card>
        </div>
    );
}
export default AddUser;