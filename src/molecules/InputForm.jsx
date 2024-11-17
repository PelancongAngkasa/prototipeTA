import Input from "../atoms/input/Input"
import Label from "../atoms/label/label"

const Input_Form = () => {
    const {name, label, type, placeholder} = props
    return (
        <div class="mb-4">
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} placeholder={placeholder} name={name}/>
        </div>
    )
}

export default Input_Form