import React from "react"
import "./EmployeeList.scss"

import { Link } from "react-router-dom"
import Table from 'rc-table'
import { useSelector } from "react-redux"


// const Table = (props) => {

//   return (
//     <table>
//       <thead>
//         <tr>
//           { props.columns.map(columnItem => <th>{columnItem.Header}</th>) }
//         </tr>
//       </thead>
//       <tbody>
//         { props.data.map( dataItem => 
//           <tr>
//             { props.columns.map(columnItem => <td>{dataItem[columnItem.accessor]}</td>) }
//           </tr>
//         ) }
//       </tbody>
//     </table>
//   )
// }

const EmployeeList = () => {
  const employees = useSelector(state => state.employees)

  const columns = [
    { title: "First Name",    dataIndex: "firstName",   key: "firstName" },
    { title: "Last Name",     dataIndex: "lastName",    key: "lastName" },
    { title: "Start Date",    dataIndex: "startDate",   key: "startDate" },
    { title: "Department",    dataIndex: "department",  key: "department" },
    { title: "Date of Birth", dataIndex: "dateOfBirth", key: "dateOfBirth" },
    { title: "street",        dataIndex: "street",      key: "street" },
    { title: "City",          dataIndex: "city",        key: "city" },
    { title: "State",         dataIndex: "state",       key: "state" },
    { title: "Zip Code",      dataIndex: "zipCode",     key: "zipCode" }
  ]

  const data = employees
  console.log(data)

  return (
    <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <table id="employee-table" className="display"></table>
        <Link to="/">Home</Link>
        <Table columns={columns} data={data} emptyText="No data" />
    </div>
  )
}

export default EmployeeList