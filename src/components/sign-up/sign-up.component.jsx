import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import { useDispatch } from "react-redux";
import Button from "../button/button.component";
import { signUpStart } from "../../store/user/user.action";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import './sign-up.styles.scss';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmpassword: ''
}

const SignUp = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch()
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Error: the passwords dont match');
            return;
        }

        try {
            dispatch(signUpStart(email,password,displayName))
            resetFormFields();
        }
        catch(error) {
            console.error(error)
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }


    return(
        <div className="sign-up-container">
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                label='Display Name'
                type="text" 
                required 
                onChange={handleChange} 
                name="displayName"
                value={displayName}/>

                <FormInput
                label='Email'
                type="email" 
                required 
                onChange={handleChange} 
                name="email" 
                value={email}/>

                <FormInput
                label='Password'
                type="password" 
                required 
                onChange={handleChange}
                name="password" 
                value={password}/>

                <FormInput
                label='Confirm Password'
                type="password" 
                required 
                onChange={handleChange} 
                name="confirmPassword" 
                value={confirmPassword}/>  
                <Button type="submit">Sign Up</Button>   
            </form>
        </div>
    )
}

export default SignUp;