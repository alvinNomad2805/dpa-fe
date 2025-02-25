'use client'

import PageTemplate from "@/app/sidebarlayout";
import { Box, Typography } from "@mui/material";

function ApprovalPageContent() {
  return (
    <>
      <PageTemplate></PageTemplate>
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography>Dashboard content for Approval page only</Typography>
      </Box>
    </>
    
  );
}

export default ApprovalPageContent