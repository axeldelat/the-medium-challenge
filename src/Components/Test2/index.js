import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

let example = [1,2,3]

function Test2() {

  useEffect(()=>{
    fetchItems()
  },[])

  const [items,setItems] = useState([])

  const fetchItems = async ()=>{
    const data = await fetch('http://localhost:8081/entries');
    
    const items = await data.json()
    console.log(items) 
    setItems(items.results)
  }

  return (
    <div className="App">
      {example.map(elem =>{return <h1 key={elem}>
        <Link to={`/Nav/${elem}`}>{elem}</Link>
        </h1>})}
    </div>
  );
}

export default Test2;

