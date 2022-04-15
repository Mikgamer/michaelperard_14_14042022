import { Link } from "react-router-dom"
import "./App.scss"

import FormEmployee from "./components/FormEmployee"

const App = () => {
  return (
    <div className="App">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
          <Link to="employees">View Current Employees</Link>
          <h2>Create Employee</h2>
          <FormEmployee />
      </div>
      <div id="confirmation" className="modal">Employee Created!</div>

    </div>
  )
}

export default App;
