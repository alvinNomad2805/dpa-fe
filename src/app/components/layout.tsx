import { Box } from "@mui/material";
import Sidebar from "./sidebar";

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
    </Box>
  );
}
