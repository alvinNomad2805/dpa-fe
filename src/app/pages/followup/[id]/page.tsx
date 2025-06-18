'use client'

import MySidebar from "@/app/components/sidebar";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useEffect, useState } from "react";
import { GetCounselingScheduleById, ScheduleByIdResponse } from "../api/CounselingSchedule";
import dayjs from "dayjs";

function Schedule({params}:{params:any}){
    const [detailData,setDetailData] = useState<ScheduleByIdResponse>()


    useEffect(()=>{
        GetCounselingScheduleById(params.id).then((response:any)=>{
            setDetailData(response.data)
            console.log(response.data)
        })
    },[params.id])
    return (
        <MySidebar
            Page={`Pembimbingan Akademik Dosen ${detailData?.lecturer_name}`}
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
                            value={dayjs(detailData?.counseling_date)}
                            disabled={true}
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
                            value={dayjs(detailData?.counseling_time,'HH:mm ss')}
                            disabled={true}
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
                        multiline
                        minRows={5}
                        fullWidth
                        sx={{
                            marginTop:'20px'
                        }}
                        value={detailData?.counseling_topic}
                        disabled={true}
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