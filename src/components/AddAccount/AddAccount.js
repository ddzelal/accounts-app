import React, { Children, Component } from 'react'
import { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

function AddAccount({addNewAccountToState}) {

    const history = useHistory();

    const [newAccount, setNewAccount] = useState({
        id:"",
        name:"",
        lastname:"",
        phone:"",
        email:""
    })

   const changeHandler = (event) => {
        let id = event.target.id;
        let newAccountCopy = {...newAccount};
        newAccountCopy[id] = event.target.value;
        setNewAccount(newAccountCopy)
    }

    const addNewAccount = () => {
        history.push("/")
        addNewAccountToState(newAccount)
    }
    
   

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
            <h2 className='display-4 m-4'>Add Account</h2>
            <div className='row'>
            <div className='col-10 offset-1'>
                <input onChange={changeHandler} type="text" id="id" placeholder='id' className='form-control'></input><br></br>
                <input onChange={changeHandler} type="text" id="name" placeholder='name' className='form-control'></input><br></br>
                <input onChange={changeHandler} type="text" id="lastname" placeholder='lastname' className='form-control'></input><br></br> 
                <input onChange={changeHandler} type="text" id="phone" placeholder='phone' className='form-control'></input><br></br> 
                <input onChange={changeHandler} type="text" id="email" placeholder='email' className='form-control'></input><br></br> 
                <br></br>
                <button onClick={addNewAccount} className='btn btn-primary form-control'>Save</button>
            </div>
             </div>
            </div>
        </div>
    </div>
  )
}

export default withRouter(AddAccount)