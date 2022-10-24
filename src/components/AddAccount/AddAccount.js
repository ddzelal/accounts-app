import React from 'react'
import { useState , useEffect , useRef } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

function AddAccount({addNewAccountToState}) {

    const history = useHistory();
    const idInput = useRef()

    useEffect(() => {
        idInput.current.focus()
    }, [])

    const [newAccount, setNewAccount] = useState({
        id:"",
        name:"",
        lastname:"",
        phone:"",
        email:""
    })

//    const changeHandler = (event) => {
//         let id = event.target.id;
//         let newAccountCopy = {...newAccount};
//         newAccountCopy[id] = event.target.value;
//         setNewAccount(newAccountCopy)
//     }

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
                <input ref={idInput} onChange={(e) => {setNewAccount({...newAccount,id:e.target.value})}} type="text" placeholder='id' className='form-control'></input><br></br>
                <input onChange={(e) => {setNewAccount({...newAccount,name:e.target.value})}} type="text"  placeholder='name' className='form-control'></input><br></br>
                <input onChange={(e) => {setNewAccount({...newAccount,lastname:e.target.value})}} type="text"  placeholder='lastname' className='form-control'></input><br></br> 
                <input onChange={(e) => {setNewAccount({...newAccount,phone:e.target.value})}} type="text" placeholder='phone' className='form-control'></input><br></br> 
                <input onChange={(e) => {setNewAccount({...newAccount,email:e.target.value})}} type="text" placeholder='email' className='form-control'></input><br></br> 
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