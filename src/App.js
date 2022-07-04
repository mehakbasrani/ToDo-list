import React , { useState } from 'react'
import Lists from './Lists'

function App() {
///let iitem = ""
const [item ,setItem] = useState("") 
const [itemName ,addItem] = useState([])

const update = (e) =>{
 setItem(e.target.value)
}

const listOfItems = () =>{
  addItem((oldItems) =>{
    return [...oldItems ,item]
  });
  setItem('')
};

const deleteItems = (id) =>{
  console.log("clicked")
  addItem((oldItems) =>{
    return oldItems.filter((arrElement ,index) =>{
      return index !== id
    })
  });
}


  return (
    <div id = "container">
      <div id= "box">
        <h1>ToDo List</h1>
        <input type = "text"
         placeholder = "Enter a item"
         value = {item}
         onChange = {update} />
        <button onClick = {listOfItems}> + </button>
        
        <ol>
          { itemName.map( (itemvalue ,index) =>{
           return <Lists listItem = {itemvalue}
           key = {index}
           id = {index}
           onSelect = {deleteItems} />
          })}
        </ol>
      </div>
    </div>
  );
}
   
export default App;
