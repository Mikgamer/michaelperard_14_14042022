import { Link } from "react-router-dom"

const EmployeeList = () => {

  return (
    <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <Link to="/">Home</Link>
    </div>
  )
}

export default EmployeeList