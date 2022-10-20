import React from 'react'
import { useState , useEffect } from 'react'
import { useHistory } from 'react-router';
import { useParams , withRouter} from 'react-router'

function EditAccount({accounts , editAccount}) {

    const {id} = useParams();
    const history = useHistory();

    const [account, setAccount] = useState({
        id:"",
        name:"",
        lastname:"",
        phone:"",
        email:""
    })

    useEffect(() => {
    
       const accountForEdit = accounts.filter(acc => acc.id == id)[0] 
       setAccount(accountForEdit)
        
    }, []);

    const changeAccount = (event) => {
        const copyOfAccount = {...account}
        copyOfAccount[event.target.id] = event.target.value;
        setAccount(copyOfAccount)
    }

    const edit_Account =()=> {
        editAccount(account)
        history.push("/")

    }

    

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
                <h2 className='display-4 m-4'>Edit Account</h2>
                <div className='row'>
                    <div className='col-10 offset-1'>
                        <input onChange={changeAccount} type="text" id="name" className='form-control' value={account.name}></input><br/>
                        <input onChange={changeAccount} type="text" id="lastname" className='form-control' value={account.lastname}></input><br/>
                        <input onChange={changeAccount} type="text" id="phone" className='form-control' value={account.phone}></input><br/>
                        <input onChange={changeAccount} type="text" id="email" className='form-control' value={account.email}></input><br/>
                        <button onClick={edit_Account} className='from-control btn btn-info'>Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default withRouter( EditAccount);