import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");
  const listItems = list.map((item) => <li>{item}</li>);
  const updateNewItem = (event) => {
    console.log(event.target.value);
    setNewItem(event.target.value);
  };
  const addListItem = () => {
    const currentList = [...list];
    if (newItem) {
      currentList.push(newItem);
      setList(currentList);
      setNewItem("");
    }
  };

  return (
    <div className="App">
      <ul>{listItems}</ul>
      <input value={newItem} onChange={updateNewItem}></input>
      <div onClick={addListItem}>{"Add"}</div>
    </div>
  );
}
