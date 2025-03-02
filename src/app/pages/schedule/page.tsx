'use client'
import MySidebar from "@/app/components/sidebar"
import { TextField } from "@mui/material"
import Grid from "@mui/material/Grid"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, LocalizationProvider, TimePicker } from "@mui/x-date-pickers"

const Schedule = () => {
    return (
        <MySidebar
            Page="Create Schedule"
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
                
                <TextField
                    id="consultation"
                    label="Konsultasi"
                    multiline
                    minRows={10}
                    fullWidth
                    sx={{
                        marginTop:'20px'
                    }}
                /> 

            </Grid>

        </MySidebar>
    )
}

export default Schedule