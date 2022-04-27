import { Controller } from "react-hook-form"
import Select from 'react-select'

// props = { name, control, options, inputId }
const ControllerSelect = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({ field }) => (
        <Select 
          options={props.options} onChange={(data) => {field.onChange(data.value)} }
          value={props.options.find(option => option.value === field.value)}
          inputId={props.inputId} classNamePrefix="select"
        />
      )}
    />
  )
}

export default ControllerSelect