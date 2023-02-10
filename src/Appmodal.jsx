import "./Appmodal.css";
import React, { useState, useEffect } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
  }

  useEffect( () => {
    console.log('ONLY on mount ')
  }, [])

  useEffect(() => {
    console.log(`on mount and on ${showModal} change`)

  }, [showModal])

  useEffect(() => {
    console.log(`EVERY render`)

  })  // no dependency list, runs ever render

  return (
    <div>
      
    </div>
  );
}

export default App;
