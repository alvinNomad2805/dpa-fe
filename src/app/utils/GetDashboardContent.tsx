import { Box, Typography } from "@mui/material";

function GetDashboardContent({path}:{path:string}){
    if (path==='/schedule'){
        console.log('get check that again')
    }
    return path + 'good'
}


export default GetDashboardContent