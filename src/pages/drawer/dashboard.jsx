import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from '@mui/material/Avatar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
          <ListItem >
            <ListItemButton>
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
              <Avatar/> 
              My account
             </div>
              <ListItemText />
            </ListItemButton>
          </ListItem>

          <ListItem >
            <ListItemButton>
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
              <FormatListBulletedIcon/> 
              My applications
             </div>
              <ListItemText />
            </ListItemButton>
          </ListItem> 
          
      </List>
      <Divider />
      <List>
      <ListItem >
            <ListItemButton>
             <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"10px"}}>
              <LogoutIcon/>
              Log Out
             </div>
              <ListItemText />
            </ListItemButton>
          </ListItem>  
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><AccountCircleTwoToneIcon/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
