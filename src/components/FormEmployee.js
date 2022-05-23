import { useForm } from "react-hook-form"
import { useRef } from "react"
import ControllerDatePicker from "./ControllerDatePicker"
import ControllerSelect from "./ControllerSelect"
import { useDispatch } from 'react-redux'
import { add } from "../store"
import { v4 as uuidv4 } from 'uuid'
import { Link } from "react-router-dom"
import Modal, { openModal } from "yet-another-react-modal-component"
import { optionsStates, optionsDepartment } from "../formData"
import "./FormEmployee.scss"

const FormEmployee = () => {
  const { register, handleSubmit, control } = useForm()
  const dispatch = useDispatch()
  const dateOfBirth = useRef(null),
        startDate = useRef(null)

  const saveEmployee = async data => { 
    let dateOfBirthParsed, startDateParsed
    dateOfBirthParsed = await data.dateOfBirth ? new Date(data.dateOfBirth?.getTime() - data.dateOfBirth?.getTimezoneOffset() * 60 * 1000)?.toISOString().substring(0,10) : undefined
    startDateParsed = await data.startDate ? new Date(data.startDate?.getTime() - data.startDate?.getTimezoneOffset() * 60 * 1000)?.toISOString().substring(0,10) : undefined
    const dataParsed = { ...data, dateOfBirth: dateOfBirthParsed , startDate: startDateParsed, id: uuidv4() }
    dispatch( add( dataParsed ) )
    openModal("#successModal")
  }

  const DatePickerFocusByRef = (ref) => { ref.current.wrapper.querySelector("[name=day]").focus() }

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