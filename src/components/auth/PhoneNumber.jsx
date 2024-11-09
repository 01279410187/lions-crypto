import React,{useState} from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const PhoneNumber = () => {
    const [value, setvalue] = useState({phone:""})

    
  return (
    <PhoneInput
    value={value.phone}
    onChange={phone => setvalue({ phone })}
    
  />
  )
}

export default PhoneNumber