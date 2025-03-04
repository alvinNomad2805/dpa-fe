'use client'

import MySidebar from "@/app/components/sidebar";
import { Grid} from "@mui/material";

const getTheValue = () =>{
  console.log(getTheValue)
}

function AccountPageContent() {
  return (
    <MySidebar
      Page="My Account"
      >
        <Grid
          container
        >
        </Grid>
    </MySidebar>
  );
}

export default AccountPageContent