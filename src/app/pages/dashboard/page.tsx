import MySidebar from "@/app/components/sidebar"
import { Box, Grid, Typography } from "@mui/material"

const DashboardPage = () => {
    return(
        <MySidebar
            Page="Dashboard">
            <Grid container direction={'row'} columns={2} columnGap={'20px'}>
              <Box
                sx={{
                  marginTop:'20px',
                  padding:'5px 5px 5px 5px',
                  height:100,
                  width:300,
                  borderRadius:2,
                  bgcolor:'primary.main'
                }}
                >
                <Typography
                  variant='h5'
                >Total Consultation</Typography>  
              </Box>
              <Box
                sx={{
                  marginTop:'20px',
                  padding:'5px 5px 5px 5px',
                  height:100,
                  width:300,
                  borderRadius:2,
                  bgcolor:'primary.main'
                }}
                >
                <Typography
                  variant='h5'
                >Total Consultation</Typography>  
              </Box>
            </Grid>
        </MySidebar>
    )
}

export default DashboardPage