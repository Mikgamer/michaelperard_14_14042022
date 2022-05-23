import { Suspense, lazy } from 'react'
import { Link } from "react-router-dom"
const FormEmployee = lazy(() => import("./components/FormEmployee"))

const App = () => {
  return (
    <main className="container">
      <h1>HRnet</h1>
      <Link to="employees" className="link">View Current Employees</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <FormEmployee />
      </Suspense>
    </main>
  )
}

export default App;
