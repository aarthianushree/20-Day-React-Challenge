
import { useState } from 'react';
import './App.css';
import JSONDATA from './MOCK_DATA.json'

function App() {

  const [value, setValue] = useState("");

  function handleChange(event){
    const inputValue = event.target.value;
    setValue(inputValue);
  }

  function handleClick(name){
    const info = (name)=>{
      {name.map( order=>{
        return(
          order
        )
      })}
    }
    console.log(info)
  }

  return (
    <div className="App">

    <input type='text' placeholder="search...." onChange={handleChange}/>

     {JSONDATA.filter( (val)=>{
        if(val === "")
        {
          return val;
        }
        else if(val.first_name.toLowerCase().includes(value.toLowerCase()))
        {
          console.log(val);
          return val;
        }
     }).map( (val,key)=>{
      return (

      <div className='users' key={key}>
        <button name={val} onClick={handleClick}>{val.first_name}</button>
      </div>

      )
     })
     
     }

    </div>
  );
}

export default App;
