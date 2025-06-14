'use client'

import MySidebar from "@/app/components/sidebar"
import { Button, TextField } from "@mui/material"
import Grid from "@mui/material/Grid"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers"
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import Cookies from 'js-cookie'
import { jwtDecode } from "jwt-decode";
import postNewSchedule, { schedulePost } from "./api/postSchedule";

interface jwtPayload {
    user_email_address:string
    user_id:number
    exp:number
}

const Schedule = () => {
    const [pickDate,setPickDate] = useState<Dayjs|null>(dayjs())
    const [pickTime,setPickTime] = useState<Dayjs|null>(dayjs())
    const [pickCounseling,setPickCounseling] = useState<string>("")


    const handleSubmit = async () =>{
        try{
            const token_data:string|undefined = Cookies.get('token')
            if (!token_data){
                throw Error('The token not existed')
            }
            const decode = jwtDecode<jwtPayload>(token_data)

            const post_request:schedulePost = {
                user_id:decode.user_id,
                counseling_date:pickDate?.format('YYYY-MM-DD'),
                counseling_time:pickTime?.format('HH:mm:ss'),
                counseling_topic:pickCounseling
            }
            await postNewSchedule(post_request)
            alert('Schedule added')
        }catch{(error:any)=>alert(error)}
    }

    return (
        <MySidebar
            Page="Pick Schedule"
            >
            <Grid
                container
                >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        name="pick_date"
                        label='Pick Date'
                        sx={{
                            marginTop:"20px"
                        }}
                        value={pickDate}
                        onChange={(newValue)=>{setPickDate(newValue)}}
                    >
                    </DatePicker>
                </LocalizationProvider>
                
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                        name="pick_time"
                        label='Pick Time'
                        sx={{
                            marginTop:"20px",
                            marginLeft:"20px"
                        }}
                        value={pickTime}
                        onChange={(newValue)=>setPickTime(newValue)}
                    >
                    </TimePicker>
                </LocalizationProvider>
                
                <TextField
                    id="counseling"
                    name="counseling"
                    label="Counseling"
                    multiline
                    minRows={10}
                    fullWidth
                    sx={{
                        marginTop:'20px'
                    }}
                    value={pickCounseling}
                    onChange={(newValue)=>setPickCounseling(newValue.target.value)}
                />
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
                    onClick={handleSubmit}
                    >Submit</Button>

            </Grid>

        </MySidebar>
    )
}

export default Schedule