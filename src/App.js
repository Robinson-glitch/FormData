import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';

function App() {

  const[username,setUsername]=useState("");
  const[lastName,setlastName]=useState("");



   const savefirstname=(event)=>{

    setUsername(event.target.value);

   }

   const savelastname=(event)=>{

    setlastName(event.target.value);

   }

  return (
     <form id="PersonalDetail" name="PersonalDetail">
      <div className="Name" style={{display:"flex",flexDirection:"column", gap:"10px"}}>

<label htmlfor="firstName" >
<input id="firstName" type="text" name="firstName" placeholder="FirstName" value={username} onChange={(event)=>(savefirstname(event))} required></input>
</label>

<label htmlfor="lastName" >
<input id="lastName" type="text" name="lastName" placeholder="LastName" value={lastName} onChange={(event)=>(savelastname(event))} required></input>
</label>

 <div className="button"> 
<button type="submit">Button</button>
<div>Full Name:{username} {lastName}</div>
 </div>
</div>
    </form>
  
  );
}

export default App;
