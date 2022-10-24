import React from "react";
import { useState } from "react";
import {Route, BrowserRouter , Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

function App() {

  const [accounts, setAccounts] = useState([{
    id:1,
    name:'Dzelal',
    lastname:'Dupljak',
    phone:'06652241',
    email:"dzelal@gmail.com"
  },{
    id:2,
    name:'Dzemil',
    lastname:'Dupljak',
    phone:'06652241',
    email:"dzemil@gmail.com"
  },{
    id:3,
    name:'Nikola',
    lastname:'Dzoni',
    phone:'06652241',
    email:"nikola@gmail.com"
  }])

  const addNewAccount = (acc) => {
    setAccounts([...accounts,acc])
  }

  const deleteAccount = (id) => {
      const newCopyAccounts = accounts.filter(acc => acc.id !== id)
      setAccounts(newCopyAccounts)
  }

  const editAccount = (acc) => {
      let accountPossition= accounts.map(account => account.id).indexOf(acc.id)
      accounts[accountPossition] = acc;
      setAccounts(accounts)
  }

  return (
    <BrowserRouter>
    <Header />
    <Route exact path="/">
      <AccountsTable accounts={accounts}/>
    </Route>
    <Route path="/add">
      <AddAccount addNewAccountToState={addNewAccount}/>
    </Route>
    <Switch>
    <Route path="/edit/:id">
      <EditAccount accounts={accounts} editAccount={editAccount}/>
    </Route>
    <Route path="/edit">
      <EditTable deleteAccount={deleteAccount} accounts={accounts} />
    </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
