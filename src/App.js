import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ClassForm from './ClassForm'


function App() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handMiddleNameChange(e) {
    setMiddleName(e.target.value);
  }

  function handleLastNameChange(e) {
    setlastName(e.target.value);
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setFirstName("");
    setMiddleName("");
    setlastName("");

    //(email, password)
  }

  return (

    <div>
      <ClassForm/>
      <form onSubmit={(e) => handleSubmit(e)}>
      <input
        name="firstName"
        type="firstName"
        value={firstName}
        onChange={(e) => handleFirstNameChange(e)}
      />

      <input
        name="middleName"
        type="middleName"
        value={middleName}
        onChange={(e) => handMiddleNameChange(e)}
      />

      <input
        name="firstName"
        type="firstName"
        value={lastName}
        onChange={(e) => handleLastNameChange(e)}
      />

      <input
        name="email"
        type="email"
        value={email}
        onChange={(e) => handleEmailChange(e)}
      />

      <input
        name="password"
        type="password"
        value={password}
        onChange={(e) => handlePasswordChange(e)}
      />

      <input type="submit" />
    </form>
    </div>
  );
}




export default App;
