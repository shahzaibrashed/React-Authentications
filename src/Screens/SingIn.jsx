import { TextField, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/AppRouter/FirebaseConfig/Firebase";
import { useNavigate } from "react-router-dom";


const SingIn = () => {
    const navigations = useNavigate()

    const [authData, setAuthData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const inputHandler = (e) => {
        setAuthData(prev => (
            {
                ...prev, [e.target.id]: e.target.value
            }
        ))

    }
    const sendData = async () => {
        setLoading(true);
        try {
            let data = await signInWithEmailAndPassword(auth, authData.email, authData.password)
            console.log(data.user);
            setLoading(false)
            navigations("/allproduct")
        } catch (err) {
            console.log(err);
            setLoading(false)
            setError(true)
        }
    }

    const goSingUp = () => {
        navigations("/")
}

    return (
        <Stack width={"100%"} justifyContent={"center"} height={"100vh"} alignItems={"center"} sx={{ backgroundColor: "cadetblue" }} >

            <Stack gap={"10px"}>
                <Stack>
                    <Typography sx={{ marginBottom: "10px" }} variant="h5">Sing-In Your Account</Typography>

                    <TextField sx={{ backgroundColor: "transparent" }} id="email" onChange={inputHandler} label="Email" placeholder="Enter Email" />

                </Stack>
                <Stack>
                    <TextField id="password" onChange={inputHandler} label="password" placeholder="Enter Password" />
                </Stack>
                <Stack>
                    {
                        error ? <Typography sx={{ marginBottom: "5px", color: "red", fontSize: "10px" }}>Some Things Went Wrong*</Typography> : <span></span>
                    }

                    <Button onClick={sendData} variant="contained">

                        {
                            loading ? "Loading......." : "Login"
                        }
                    </Button>
                    <Typography onClick={goSingUp} sx={{ marginTop: "5px", marginLeft: "5px", color: "green" }}>Sing Up here ...</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
export default SingIn;


