import logo from './logo.svg';
import {useEffect, useState} from "react";
import './App.css';

function App() {

  const[username,setUsername]=useState("");
  const[lastName,setlastName]=useState("");
  const[visibility,setvisibility]=useState(true);



   const savefirstname=(event)=>{

    setUsername(event.target.value);

   }

   const savelastname=(event)=>{

    setlastName(event.target.value);

   }

   const handleSubmit =(event)=>{
   
 event.preventDefault();
 if(!username||!lastName){
  setvisibility(false);
 }
else{
  setvisibility(true);
}
   }

 
   
  return (
    <div className="FormFill">
     <form id="PersonalDetail" name="PersonalDetail" onSubmit={handleSubmit}>
      <div className="Name" style={{display:"flex",flexDirection:"column", gap:"10px"}}>
<div style={{fontSize:"16px",fontWeight:"bold" }}>Full Name Display</div>
<label htmlFor="firstName" >
<input id="firstName" type="text" name="firstName" placeholder="FirstName" value={username} onChange={(event)=>(savefirstname(event))}></input>
</label>

<label htmlFor="lastName" >
<input id="lastName" type="text" name="lastName" placeholder="LastName" value={lastName} onChange={(event)=>(savelastname(event))}></input>
</label>

 <div className="button"> 
<button type="submit">Button</button>
 </div>
</div>
</form>
{visibility&&(<div id="nameLabel">Full Name:{username} {lastName}</div>)}
  </div>
  );
}

export default App;
