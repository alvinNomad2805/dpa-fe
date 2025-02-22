'use client'

import { Box, Typography } from "@mui/material";

function ApprovalPageContent() {
  return (
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
  );
}

export default ApprovalPageContent