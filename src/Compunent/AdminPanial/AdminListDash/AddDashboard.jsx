import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import marhaba from "../../../assets/marhaba.png"
import { Link, Route, Routes } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsTwoToneIcon from '@mui/icons-material/NotificationsNone';
// import "./admin.css"
import Dashboard from '../AdminListDash/Dashboard';
import AddProperty from '../AdminListDash/AddProperty';
import CardCompount from '../../CardCompount/CardCompount';
const drawerWidth = 280;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [condition, setCondition] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className=''>
      
    <Link to="/">  <img src={marhaba} width="100" alt="" /> </Link>
      <Divider />
      <div className=" mt-4 ">
     <Link to="/AddDashboard"className='text-decoration-none'> <List className='list_hover'>
    <DashboardIcon className='fs-5'/> Dashboard
      </List></Link>
      <List className='list_hover'>
   <MailOutlineIcon className='fs-5'/> Massages
      </List>
      <List className='list_hover'>
   <AssuredWorkloadIcon className='fs-5'/> My Properties
      </List>
      <Link to="/AdminDashdord"className='text-decoration-none'><List className='list_hover'>
   <AddCircleIcon className='fs-5'/> Add Properties
      </List></Link>
    <List className='list_hover'>
  <PersonOutlineIcon/> My Profile
      </List>
      <List className='list_hover'>
   <LogoutIcon className='fs-5'/> Logout
      </List>
     </div>
    
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='bg-white text-dark d-flex justify-content-between'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           <button className='go_to_main'>Go to Realproperty.pk</button>
           
          </Typography>
          <Typography variant="h6" noWrap component="div" className='d-flex align-items-center ' style={{gap:"10px"}}>
           <button className='post_btn d-flex align-items-center btn text-white'style={{gap:"10px"}}><AddCircleIcon className='text-white fs-6'/><p className='p-0 m-0 d-none d-md-block'>Post Free List</p></button>
           <NotificationsTwoToneIcon className='fs-2 '/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>
       

     <Dashboard/>
 

        </Typography>
       
      </Box>
    </Box>
  );
}



export default ResponsiveDrawer;
