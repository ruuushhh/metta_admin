import React from "react"
import Link from "next/link"
import { PageBody } from "../styles"
import Image from 'next/image'
import {
    AppBar,
    Box,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Tooltip,
    MenuItem,
    Toolbar,
  } from '@mui/material';

import  Logo  from '../images/logo.png'


const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Image src={Logo} alt="logo" width={100} height={100} />
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Image src={Logo} alt="logo" width={100} height={100} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="John" src="#" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"              
            >
              
                <MenuItem >
                  <Typography textAlign="center">settings</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Layout