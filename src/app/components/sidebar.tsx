import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import Link from "next/link";

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <>
    <div className="header-up">sibal</div>
      <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <List>
        <Link href="/pages/approval" passHref>
          <ListItem  component="a">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Approval" />
          </ListItem>
        </Link>
        <Link href="/pages/schedule" passHref>
          <ListItem component="a">
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Schedule" />
          </ListItem>
        </Link>
      </List>
      <div className="dashboard"
    >
      cobain saja
    </div>
    </Drawer>
    </>
  );
};

export default Sidebar;
