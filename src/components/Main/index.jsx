import * as React from 'react';
import { useTheme } from '@mui/material/styles';

// MATERIAL UI
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

// COMPONENTS
import Navbar from './components/Navbar';
import LeftDrawer from './components/LeftDrawer';
import Body from './components/Body';
import { BrowserRouter } from "react-router-dom";

const drawerWidth = 240;

export default function Main() {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            
            <BrowserRouter>
                <Navbar open={open} handleDrawerOpen={() => handleDrawerOpen()}/>
                
                <LeftDrawer 
                    drawerWidth={drawerWidth} 
                    open={open}
                    handleDrawerClose={() => handleDrawerClose()}
                    theme={theme} />

                <Body open={open}/>                
            </BrowserRouter>
        </Box>
    );
}