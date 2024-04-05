
import SignUp from '../../components/sign-up/sign-up.component';
import SignIn from "../../components/sign-in/sign-in.component";
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {


    return (
        <AuthenticationContainer>
            <SignIn></SignIn>
            <SignUp />
        </AuthenticationContainer>
    )
}

export default Authentication;




/////////////////////////////////////////////
/*
import { signInWithGooglePopup,createUserDocumentFromAuth,signInWithGoogleRedirect,auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
    useEffect(() => {
        const handleRedirectResult = async () => {
            try {
                const result = await getRedirectResult(auth);
                if (result) {
                    const userDocRef = await createUserDocumentFromAuth(result.user);
                }
            } catch (error) {
                console.error("Error handling redirect result:", error);
            }
        };

        handleRedirectResult(); // Call the function immediately

        // Cleanup function (optional)
        return () => {
            // Any cleanup code here
        };
    }, []);

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    };


    return (
        <div>
            <h1>Sign in Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
        </div>
    )
}

export default SignIn;
*/
