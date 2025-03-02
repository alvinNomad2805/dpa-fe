import MySidebar from "@/app/components/sidebar"
import { TextField } from "@mui/material"
import Grid from "@mui/material/Grid"

const Schedule = () => {
    return (
        <MySidebar
            Page="Create Schedule"
            >
            <Grid
                container
                >
                <TextField
                    id="consultation"
                    label="Konsultasi"
                    multiline
                    maxRows={100}
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