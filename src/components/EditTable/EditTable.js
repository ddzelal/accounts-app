import React from 'react'
import Account from '../Account/Account'

function EditTable({accounts , deleteAccount }) {

    const AllAccounts = accounts.map(   accounts => {
        return(
            <Account key={accounts.id} accounts={accounts} edit={true}  deleteAccount={deleteAccount}/>
        )
    })

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-10 offset-1'>
                <h3 className='display-4 m-4'>Edit / Delete</h3>
                <div className='row'>
                    <div className='col-10 offset-1'>
                    <table className='table'>
                    <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Lastname</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {AllAccounts}
                        </tbody>
                    </table>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditTable