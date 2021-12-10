import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

// VIEWS
import Dashboard from 'views/Dashboard';
import Settings from 'views/Settings';
import Sales from 'views/Sales';
import Marketing from 'views/Marketing';
import Inventory from 'views/Inventory';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
);

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Body = ({open}) => {
    return(
        <Main open={open}>
            <DrawerHeader />
            <Routes>
                <Route index element={<Dashboard />}/>
                <Route path="Dashboard" element={<Dashboard />}/>
                <Route path="Marketing" element={<Marketing />}/>
                <Route path="Sales" element={<Sales />}/>
                <Route path="Inventory" element={<Inventory />}/>
                <Route path="Settings" element={<Settings />}/>
            </Routes>
        </Main>
    );
}

export default Body;