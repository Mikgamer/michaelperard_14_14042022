import { Controller } from "react-hook-form"
import DatePicker from 'react-date-picker'

const ControllerDatePicker = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <DatePicker
          name="start-date"
          onChange={(date) => field.onChange(date)} 
          value={field.value}
          ref={props.labelRef}
        />
      )}
    />
  )
}

export default ControllerDatePicker