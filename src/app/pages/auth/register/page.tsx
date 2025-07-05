import RootLayout from "@/app/layout"
import { Box, Button, Select, TextField, Typography } from "@mui/material"
import uiilogo from '../../../../../public/my-assets/UII_LOGO.png'
import Image from "next/image"


const RegisterPage = () => {

    return (
        <RootLayout>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    width: '100%',
                    backgroundImage:`url("/my-assets/Background.png")`,
                    backgroundSize:'cover',
                    zIndex:-1,
                    opacity:0.6
                }}
            >
                <Box
                    sx={{
                        marginTop:'10px',
                        display:'flex',
                        justifyContent:'center',
                        flexDirection:'column',
                        alignItems:'center'
                    }}  
                    >
                        <Image
                            src={uiilogo}
                            alt="uii logo"
                        ></Image>
                    <Box
                        width={400}
                        sx={{
                            display:'flex',
                            flexDirection:'column',
                            p: 3,           // padding: theme.spacing(3)
                            m: 2,           // margin: theme.spacing(2)
                            bgcolor: 'background.paper',
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 2,
                        }}
                        >
                        <Typography 
                            fontSize={40}
                            sx={{
                                marginBottom:'10px',
                                fontWeight:'bold'
                            }}
                        >Registration</Typography>
                        <TextField 
                            label="User Full Name"
                        />
                        <TextField 
                            sx={{
                                marginTop:'20px'
                            }}
                            label="User Email Address"
                        />
                        <TextField 
                            sx={{
                                marginTop:'20px'
                            }}
                            label="User Password"
                        />
                        <TextField 
                            sx={{
                                marginTop:'20px'
                            }}
                            label="Confirm Password"
                        />
                        <Select 
                            sx={{
                                marginTop:'20px'
                            }}
                            label='Role'
                            
                        />
                        <TextField 
                            sx={{
                                marginTop:'20px'
                            }}
                            label='User Id Number'
                        />
                        <Select 
                            sx={{
                                marginTop:'20px'
                            }}
                            label='Classroom'
                        />
                        <Button
                            variant="contained" 
                            sx={{
                            marginTop:'10px'
                        }}>
                            Submit Registration
                        </Button>

                    </Box>
                </Box>
            </Box>
        </RootLayout>
    )
}

export default RegisterPage