'use client'

import MySidebar from "@/app/components/sidebar";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Schedule({params}:{params:any}){
    return (
        <MySidebar
            Page={`Schedule Detail : ID ${params.id}`}
            >
                <Grid
                    container
                    >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label='Pick Date'
                            sx={{
                                marginTop:"20px"
                            }}
                        >
                        </DatePicker>
                    </LocalizationProvider>
                    
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <TimePicker
                            label='Pick Time'
                            sx={{
                                marginTop:"20px",
                                marginLeft:"20px"
                            }}
                        >
                        </TimePicker>
                    </LocalizationProvider>
                </Grid>

                <Grid
                    container
                    >
                    <Typography
                        variant='h5'
                        sx={{
                            marginTop:'15px'
                        }}
                        >Problem</Typography>
                    <TextField
                        id="counseling"
                        label="Put your Description"
                        multiline
                        minRows={5}
                        fullWidth
                        sx={{
                            marginTop:'20px'
                        }}
                    />

                </Grid>

                <Grid
                    container
                    >
                    <Typography
                        variant='h5'
                        sx={{
                            marginTop:'15px'
                        }}
                        >Feedback</Typography>
                    <TextField
                        id="feedback"
                        label="Put your Description"
                        multiline
                        minRows={5}
                        fullWidth
                        sx={{
                            marginTop:'20px'
                        }}
                    />

                    <Grid alignContent={'center'}>
                        <p>Meeting Type :</p>
                        <p>Meeting Location :</p>
                    </Grid>
                </Grid>

                <Grid
                    item
                    style={{
                        display:"flex",
                        justifyContent:"flex-end"
                    }}
                
                    >
                    <Button
                        variant="contained"
                        sx={{
                            width:"15%",
                            marginTop:"20px",
                            borderRadius:"20px",
                            '&:hover': {
                                boxShadow: 3,
                                backgroundColor: '#f7d217',
                                color:'black'
                            }
                        }}
                        onClick={()=>{}}
                        >Submit</Button>
                </Grid>

        </MySidebar>
    )
}

export default Schedule