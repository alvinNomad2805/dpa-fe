'use client'

import MySidebar from "@/app/components/sidebar";
import { Grid } from "@mui/material";
import {DataGrid, GridColDef} from '@mui/x-data-grid'
import { useRouter } from "next/navigation";


const counselingListColumn:GridColDef[] =[
  {
    field:'counseling_submit_date',
    headerName:'Date Submit',
    flex:2
  },
  {
    field:'counseling_followup_date',
    headerName:'Counseling Date',
    flex:2
  },
  {
    field:'counseling_topic',
    headerName:'Topic',
    flex:2
  },
  {
    field:'counseling_status',
    headerName:'Status',
    flex:2,
  },
]

function ApprovalPageContent() {
  const router = useRouter()

  const rows_data = [
    {id:1,counseling_submit_date:'2024-02-01',counseling_followup_date:'2025-01-01',counseling_topic:'coba makan enak',counseling_status:'Wait Approve'},
    {id:2,counseling_submit_date:'2024-02-01',counseling_followup_date:'2025-01-01',counseling_topic:'makan lagi',counseling_status:'Wait Approve'},
    {id:3,counseling_submit_date:'2024-02-01',counseling_followup_date:'2025-01-01',counseling_topic:'kaleyo',counseling_status:'Wait Approve'},
    {id:4,counseling_submit_date:'2024-02-01',counseling_followup_date:'2025-01-01',counseling_topic:'coba makan enak',counseling_status:'Wait Approve'},
    {id:5,counseling_submit_date:'2024-02-01',counseling_followup_date:'2025-01-01',counseling_topic:'coba makan enak',counseling_status:'Wait Approve'}
  ]

  const handleDoubleClick = (row:any) => {
    router.push('/pages/schedule/'+row.id)
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
            rows={rows_data}
            onRowDoubleClick={handleDoubleClick}
            ></DataGrid>
        </Grid>
    </MySidebar>
  );
}

export default ApprovalPageContent