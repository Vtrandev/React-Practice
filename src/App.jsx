import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState } from "react";
import Counter from "./components/Counter";

function App() {
  const [showModal, changeModal] = useState(false)

  return (
    <div>
      <Counter />

      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }}/>
        <button onClick={() => changeModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified"
        />
        <Todo
          title="Finish the Interview"
        />
        <Todo title="Land a $100k Job"
        />
      </div>
      {showModal && <Modal title="Are you sure?" />}
    </div>
  );
}

export default App;
