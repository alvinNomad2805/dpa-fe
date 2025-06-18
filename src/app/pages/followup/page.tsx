'use client'

import MySidebar from "@/app/components/sidebar";
import { Grid } from "@mui/material";
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GetCounselingSchedule, ScheduleProp } from "./api/CounselingSchedule";


const counselingListColumn:GridColDef[] =[
  {
    field:'created_datetime',
    headerName:'Date Submit',
    flex:2
  },
  {
    field:'counseling_date',
    headerName:'Counseling Date',
    flex:2
  },
  {
    field:'counseling_topic',
    headerName:'Topic',
    flex:2
  },
  {
    field:'status_name',
    headerName:'Status',
    flex:2,
  },
]

function ApprovalPageContent() {
  const router = useRouter()
  const [dataFollowUp,setDataFollowUp] = useState<ScheduleProp>()

  useEffect(()=>{
    GetCounselingSchedule({
      user_id:Number(localStorage.getItem('user_id')),
      limit:10,
      page:0
    }).then((response:any)=>{
      console.log(response.data)
      setDataFollowUp(response)
    })
  },[])

  const handleDoubleClick = (row:any) => {
    router.push('/pages/followup/'+row.id)
  }

  return (
    <MySidebar
      Page="Counseling Schedule"
      >
        <Grid
          container
        >
          <DataGrid
            sx={{
              marginTop:'30px'
            }}
            columns={counselingListColumn}
            rows={dataFollowUp?.data}
            onRowDoubleClick={handleDoubleClick}
            getRowId={(data:any)=>{return data.counseling_id}}
            ></DataGrid>
        </Grid>
    </MySidebar>
  );
}

export default ApprovalPageContent