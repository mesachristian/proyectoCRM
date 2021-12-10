import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";

// MATERIAL UI
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

// ICONS
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const LeftDrawer = ({drawerWidth, open, handleDrawerClose, theme}) => {

    const DrawerItems = [
        {name: 'Dashboard', logo: <DashboardIcon />},
        {name: 'Marketing', logo: <LeaderboardIcon />},
        {name: 'Sales', logo: <AttachMoneyIcon />},
        {name: 'Inventory', logo: <Inventory2Icon />},
        {name: 'Settings', logo: <SettingsIcon />}
    ];

    return(
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {DrawerItems.map((item, index) => (
                    <div>
                        {index === DrawerItems.length - 1 && <Divider />}
                        <Link to={item.name} style={{ textDecoration: 'none', color : 'gray' }}>
                            <ListItem button key={item.name}>
                            <ListItemIcon>
                                {item.logo}
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
            </List>
            
        </Drawer>
    );
}

export default LeftDrawer;