import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Users from "./pages/Users";

function App() {
  

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/users/:usename' element={<Users />}></Route>
        </Routes>
      </Router>  
    </div>

// const [showModal, changeModal] = useState(false)

// function onTodoDelete() {
//   console.log('onTodoDelete()')
//   changeModal(prevModal => !prevModal);
// }

// useEffect(() => {console.log('on mount')}, [])

      // <Title />
      // <div>
      //   <input type="text" onChange={(event) => {
      //     console.log(event.target.value)
      //   }}/>
      //   <button onClick={() => changeModal(true)}>Add todo</button>
      // </div>
      // <div className="todo__wrapper">
      //   <Todo
      //     title="Finish Frontend Simplified"
      //     todoDelete = {onTodoDelete}
      //   />
      //   <Todo
      //     title="Finish the Interview"
      //     todoDelete = {onTodoDelete}
      //   />
      //   <Todo title="Land a $100k Job"
      //   todoDelete = {onTodoDelete}
      //   />
      // </div>
      // {showModal && <Modal todoDelete={onTodoDelete} title="Are you sure?" />}
  );
}

export default App;
