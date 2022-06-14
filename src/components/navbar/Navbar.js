import React from 'react'
import Grid from '@material-ui/core/Grid';
import "./Navbar.css"
import { useState } from 'react';
import { Box, Button, Drawer, IconButton} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  const [isActive, setIsActive] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <div>
        <header className='navBarHeader'>
            <Grid container justifyContent='space-evenly'>
                <Grid item xs={11} lg={11} className="navBar">
                   <div className='navBarLogo'>
                       <img src="./Assets/logo.png"/>
                   </div>
                   <div className='navBar'>
                       <div className='navBarList'>
                           <ul className='NavBarLists'>
                                <li>
                                    <a className='links' href=''>Home</a>
                                </li>
                                <li>
                                    <a className='links'  href=''>About</a>
                                </li>
                                <li>
                                    <a className='links'  href=''>Roadmap</a>
                                </li>
                                <li>
                                    <a className='links'  href=''>FAQs</a>
                                </li>
                                <li>
                                    <a href=''>Our Team</a>
                                </li>
                           </ul>
                       </div>
                   </div>
                   {/* ==========================DROPDRWN========================= */}
                   <div className='navbar-btns'>
                    <div className='dropDown'>
                        <div className='dropDown-btn' onClick={(e) => setIsActive(!isActive)}>
                            <h4>Our Socials</h4> <span><ExpandMoreIcon className='btn-Icon'/></span></div>
                            {isActive && (
                        <div className='dropDown-content'>
                          <div className='dropDown-item'>
                            <div className='dropDown-itemIcon'><img src='./Assets/discord.png'/></div>
                            <div className='dropDown-itemText'>
                                Discord
                            </div>
                        </div>
                        <div className='dropDown-item'>
                            <div className='dropDown-itemIcon'><img src='./Assets/instLogo.png'/></div>
                            <div className='dropDown-itemText'>
                                Instagram
                            </div>
                        </div>
                        <div className='dropDown-item'>
                            <div className='dropDown-itemIcon'><img src='./Assets/opensea.svg'/></div>
                            <div className='dropDown-itemText'>
                                OpenSea
                            </div>
                        </div>
                        </div>   
                    )} 
                    </div>
{/* =================================================================== */}
                   
{/* ===============================DREAWER========================================== */}
                   <div className='navbarDrawer'>
                   <IconButton className='sideBarMenu' size='large' edge='start' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                       <MenuIcon className='sideBarMenuIcon'/>
                   </IconButton>
                   <Drawer   anchoe='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                       <Box className='sideBar'  width='50%' textAlign={'center'} role='presentation'>
                       <ul className='sideBarLists'>
                                <li>
                                    <a href=''>Migration</a>
                                </li>
                                <li>
                                    <a href=''>Treehouse</a>
                                </li>
                                <li>
                                    <a href=''>Gallery</a>
                                </li>
                                <li>
                                    <a href=''>BananaBAR</a>
                                </li>
                           </ul>
                       </Box>
                   </Drawer>
                   </div>
                   </div>
                </Grid>
            </Grid>
        </header>
    </div>
  ) 
}

export default Navbar