import { TextField, Stack, Button, Typography } from "@mui/material";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/AppRouter/FirebaseConfig/Firebase";
import { useNavigate } from "react-router-dom";


const SingUp = () => {

    const navigations = useNavigate()
    const [authData, setAuthData] = useState({});
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const inputHandler = (e) => {
        setAuthData(prev => (
            {
                ...prev, [e.target.id]: e.target.value
            }
        ))
    }

    const sendData = async () => {
        if (authData.name == "") {
            alert("Please Enter Your Name")
            return false
        }

        setLoading(true);
        try {
            let data = await createUserWithEmailAndPassword(auth, authData.email, authData.password)
            console.log(data.user);
            setLoading(false)
            navigations("/sing-In")
        } catch (err) {
            console.log(err);
            setLoading(false)
            setError(true)
        }
    }

    const goSingIn = () => {
        navigations("/Sing-In")
    }

    return (
        <Stack width={"100%"} justifyContent={"center"} height={"100vh"} alignItems={"center"} sx={{ backgroundColor: "cadetblue" }} >

            <Stack gap={"10px"}>
                <Stack >

                    <Typography variant="h5">Sing-Up Your Account</Typography>

                </Stack>

                <Stack>

                    <TextField id="name" onChange={inputHandler} label="Name" placeholder="Enter Name" />

                </Stack>
                <Stack>

                    <TextField id="email" onChange={inputHandler} label="Email" placeholder="Enter Email" />

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
                            loading ? "Loading......." : "Sing Up"
                        }

                    </Button>
                    <Typography onClick={goSingIn} sx={{ marginTop: "5px", marginLeft: "5px", color: "green" }}>Sing In here ....</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
}
export default SingUp;


