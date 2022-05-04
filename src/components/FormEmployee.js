import "./FormEmployee.scss"

import { useForm } from "react-hook-form"
import { useRef } from "react"
import ControllerDatePicker from "./ControllerDatePicker"
import ControllerSelect from "./ControllerSelect"
import { useDispatch } from 'react-redux'
import { add } from "../store"
import { v4 as uuidv4 } from 'uuid'
import { Link } from "react-router-dom"
import Modal, { openModal } from "yet-another-react-modal-component"

const FormEmployee = () => {
  const { register, handleSubmit, control } = useForm()
  const dispatch = useDispatch()

  const saveEmployee = async data => { 
    let dateOfBirthParsed, startDateParsed
    dateOfBirthParsed = await data.dateOfBirth ? new Date(data.dateOfBirth?.getTime() - data.dateOfBirth?.getTimezoneOffset() * 60 * 1000)?.toISOString().substring(0,10) : undefined
    startDateParsed = await data.startDate ? new Date(data.startDate?.getTime() - data.startDate?.getTimezoneOffset() * 60 * 1000)?.toISOString().substring(0,10) : undefined
    const dataParsed = { ...data, dateOfBirth: dateOfBirthParsed , startDate: startDateParsed, id: uuidv4() }
    dispatch( add( dataParsed ) )
    openModal("#successModal")
  }

  const dateOfBirth = useRef(null),
        startDate = useRef(null)
  const DatePickerFocusByRef = (ref) => { ref.current.wrapper.querySelector("[name=day]").focus() }

  const states = [ 
    { "name": "Alabama", "abbreviation": "AL" }, { "name": "Alaska", "abbreviation": "AK" }, { "name": "American Samoa", "abbreviation": "AS" }, 
    { "name": "Arizona", "abbreviation": "AZ" }, { "name": "Arkansas", "abbreviation": "AR" }, { "name": "California", "abbreviation": "CA" }, 
    { "name": "Colorado", "abbreviation": "CO" }, { "name": "Connecticut", "abbreviation": "CT" }, { "name": "Delaware", "abbreviation": "DE" }, 
    { "name": "District Of Columbia", "abbreviation": "DC" }, { "name": "Federated States Of Micronesia", "abbreviation": "FM" }, { "name": "Florida", "abbreviation": "FL" }, 
    { "name": "Georgia", "abbreviation": "GA" }, { "name": "Guam", "abbreviation": "GU" }, { "name": "Hawaii", "abbreviation": "HI" }, 
    { "name": "Idaho", "abbreviation": "ID" }, { "name": "Illinois", "abbreviation": "IL" }, { "name": "Indiana", "abbreviation": "IN" }, 
    { "name": "Iowa", "abbreviation": "IA" }, { "name": "Kansas", "abbreviation": "KS" }, { "name": "Kentucky", "abbreviation": "KY" }, 
    { "name": "Louisiana", "abbreviation": "LA" }, { "name": "Maine", "abbreviation": "ME" }, { "name": "Marshall Islands", "abbreviation": "MH" }, 
    { "name": "Maryland", "abbreviation": "MD" }, { "name": "Massachusetts", "abbreviation": "MA" }, { "name": "Michigan", "abbreviation": "MI" }, 
    { "name": "Minnesota", "abbreviation": "MN" }, { "name": "Mississippi", "abbreviation": "MS" }, { "name": "Missouri", "abbreviation": "MO" }, 
    { "name": "Montana", "abbreviation": "MT" }, { "name": "Nebraska", "abbreviation": "NE" }, { "name": "Nevada", "abbreviation": "NV" }, 
    { "name": "New Hampshire", "abbreviation": "NH" }, { "name": "New Jersey", "abbreviation": "NJ" }, { "name": "New Mexico", "abbreviation": "NM" }, 
    { "name": "New York", "abbreviation": "NY" }, { "name": "North Carolina", "abbreviation": "NC" }, { "name": "North Dakota", "abbreviation": "ND" }, 
    { "name": "Northern Mariana Islands", "abbreviation": "MP" }, { "name": "Ohio", "abbreviation": "OH" }, { "name": "Oklahoma", "abbreviation": "OK" }, 
    { "name": "Oregon", "abbreviation": "OR" }, { "name": "Palau", "abbreviation": "PW" }, { "name": "Pennsylvania", "abbreviation": "PA" }, 
    { "name": "Puerto Rico", "abbreviation": "PR" }, { "name": "Rhode Island", "abbreviation": "RI" }, { "name": "South Carolina", "abbreviation": "SC" }, 
    { "name": "South Dakota", "abbreviation": "SD" }, { "name": "Tennessee", "abbreviation": "TN" }, { "name": "Texas", "abbreviation": "TX" }, 
    { "name": "Utah", "abbreviation": "UT" }, { "name": "Vermont", "abbreviation": "VT" }, { "name": "Virgin Islands", "abbreviation": "VI" }, 
    { "name": "Virginia", "abbreviation": "VA" }, { "name": "Washington", "abbreviation": "WA" }, { "name": "West Virginia", "abbreviation": "WV" }, 
    { "name": "Wisconsin", "abbreviation": "WI" }, { "name": "Wyoming", "abbreviation": "WY" }
  ],
        optionsStates = states.map( item => ({ value : item.abbreviation, label : item.name }) ),
        department = ["Sales", "Marketing", "Engineering", "Human Resources", "Legal"],
        optionsDepartment = department.map( item => ({ value : item, label : item }) )

  return (
    <>
      <form onSubmit={handleSubmit(saveEmployee)}>
        <h2>Create Employee</h2>
        <div className="inputRow">
          <div className="inputGroup">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" {...register("firstName")} />
          </div>

          <div className="inputGroup">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" {...register("lastName")} />
          </div>
        </div>

        <div className="inputRow">
          <div className="inputGroup">
            <label onClick={()=>DatePickerFocusByRef(dateOfBirth)}>Date of Birth</label>
            <ControllerDatePicker name="dateOfBirth" control={control} labelRef={dateOfBirth} />
          </div>

          <div className="inputGroup">
            <label onClick={()=>DatePickerFocusByRef(startDate)}>Start Date</label>
            <ControllerDatePicker name="startDate" control={control} labelRef={startDate} />
          </div>
        </div>

        <fieldset className="address">
            <legend>Address</legend>

            <div className="inputRow">
              <div className="inputGroup">
                <label htmlFor="street">Street</label>
                <input id="street" type="text" {...register("street")} />
              </div>

              <div className="inputGroup">
                <label htmlFor="city">City</label>
                <input id="city" type="text" {...register("city")} />
              </div>
            </div>

            <div className="inputRow">
              <div className="inputGroup">
                <label htmlFor="state">State</label>
                <ControllerSelect name="state" control={control} options={optionsStates} inputId="state" />
              </div>

              <div className="inputGroup">
                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" {...register("zipCode")} />
              </div>
            </div>
        </fieldset>

        <div className="inputGroup">
          <label htmlFor="department">Department</label>
          <ControllerSelect name="department" control={control} options={optionsDepartment} inputId="department" />
        </div>
        
        <button type="submit" >Save</button>
      </form>
      <Modal id="successModal" >
        <h2>Employee Created!</h2>
        <Link to="employees" className="link">View Current Employees</Link>
      </Modal>
    </>
  )
}

export default FormEmployee