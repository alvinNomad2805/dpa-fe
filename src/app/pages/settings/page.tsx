'use client'

import MySidebar from "@/app/components/sidebar";
import { Grid} from "@mui/material";

const getTheValue = () =>{
  console.log(getTheValue)
}

function SettingPage() {
  return (
    <MySidebar
      Page="Settings"
      >
        <Grid
          container
        >
        </Grid>
    </MySidebar>
  );
}

export default SettingPage