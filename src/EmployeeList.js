import { useState } from "react"
import { Link } from "react-router-dom"
import { DataGrid } from '@mui/x-data-grid'
import { useSelector } from "react-redux"
import "./EmployeeList.scss"

const EmployeeList = () => {
  const [pageSize, setPageSize] = useState(5)
  const employees = useSelector(state => state.employees)
  const columns = [
    { headerName: "First Name",    field: "firstName",   minWidth: 50  },
    { headerName: "Last Name",     field: "lastName",    minWidth: 50  },
    { headerName: "Start Date",    field: "startDate",   minWidth: 150 },
    { headerName: "Department",    field: "department",  minWidth: 50  },
    { headerName: "Street",        field: "street",      minWidth: 200 },
    { headerName: "City",          field: "city",        minWidth: 50  },
    { headerName: "State",         field: "state",       minWidth: 50  },
    { headerName: "Zip Code",      field: "zipCode",     minWidth: 50  },
    { headerName: "Date of Birth", field: "dateOfBirth", minWidth: 150, flex: 1 }
  ]

  return (
    <main className="container">
        <h1>Current Employees</h1>
        <Link to="/" className="link">Home</Link>
        <div className="dataStyle">
          <DataGrid
            autoHeight
            rows={employees}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPage) => setPageSize(newPage)}
            pagination
            rowsPerPageOptions={[5, 10, 25, 50]}
            disableSelectionOnClick
          />
        </div>
    </main>
  )
}

export default EmployeeList