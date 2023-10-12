import InputForm from "../InputForm";


const PasswordInput = ({handleInput})=>{
    return(
        <InputForm type="password" title="Password" name="password" onChange={handleInput} placeholder="******************"/>
    )
}

export default PasswordInput;