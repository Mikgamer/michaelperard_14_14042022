import { Link } from "react-router-dom"

import FormEmployee from "./components/FormEmployee"

const App = () => {
  return (
    <main className="container">
      <h1>HRnet</h1>
      <Link to="employees" className="link">View Current Employees</Link>
      <FormEmployee />
    </main>
  )
}

export default App;
