import React from 'react'
// import { Box, IconButton, Input } from "@mui/material";
import styles from "./Navbar.module.css";
import styled from "styled-components";
import logo from "./logo.png"
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
const Navbar = () => {
  return (
    <>
    <div className={styles.navbarContainer}>
      <div className={styles.navbarLeft}>
        <div className={styles.logo}>
          <img src={logo} alt='Logo' />
        </div>
      </div>
      <div className={styles.navbarRight}>
        <div className={styles.searchInput}>
        <input type='text' placeholder='Search' />
        <button type="submit"><SearchIcon /></button>
        </div>
        <div className={styles.profile}>
          <div>
          <svg width="29" height="31" viewBox="0 0 29 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0277 5C7.73472 5 5.80843 6.72411 5.55522 9.00306L4.5 18.5H1.5C0.671573 18.5 0 19.1716 0 20V21.5C0 22.3284 0.671573 23 1.5 23H22.5C23.3284 23 24 22.3284 24 21.5V20C24 19.1716 23.3284 18.5 22.5 18.5H19.5L18.4448 9.00306C18.1916 6.72411 16.2653 5 13.9723 5H10.0277Z" fill="#554DB7"/>
<rect opacity="0.3" x="9" y="24.5" width="6" height="6" rx="2.25" fill="#554DB7"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 16C25.4183 16 29 12.4183 29 8C29 3.58172 25.4183 0 21 0C16.5817 0 13 3.58172 13 8C13 12.4183 16.5817 16 21 16Z" fill="#118F4B"/>
<path d="M20.912 12.12C19.864 12.12 19.052 11.752 18.476 11.016C17.908 10.28 17.624 9.248 17.624 7.92C17.624 6.488 17.944 5.38 18.584 4.596C19.232 3.812 20.124 3.42 21.26 3.42C21.708 3.42 22.152 3.504 22.592 3.672C23.032 3.832 23.408 4.064 23.72 4.368L23.216 5.52C22.92 5.248 22.604 5.048 22.268 4.92C21.932 4.784 21.588 4.716 21.236 4.716C20.54 4.716 20.008 4.96 19.64 5.448C19.272 5.936 19.088 6.664 19.088 7.632V7.98C19.256 7.54 19.528 7.196 19.904 6.948C20.28 6.7 20.712 6.576 21.2 6.576C21.688 6.576 22.12 6.692 22.496 6.924C22.872 7.156 23.168 7.476 23.384 7.884C23.6 8.292 23.708 8.76 23.708 9.288C23.708 9.832 23.588 10.32 23.348 10.752C23.116 11.176 22.788 11.512 22.364 11.76C21.948 12 21.464 12.12 20.912 12.12ZM20.828 10.896C21.26 10.896 21.608 10.756 21.872 10.476C22.144 10.188 22.28 9.812 22.28 9.348C22.28 8.884 22.144 8.508 21.872 8.22C21.608 7.932 21.26 7.788 20.828 7.788C20.396 7.788 20.044 7.932 19.772 8.22C19.508 8.508 19.376 8.884 19.376 9.348C19.376 9.812 19.508 10.188 19.772 10.476C20.044 10.756 20.396 10.896 20.828 10.896Z" fill="white"/>
</svg>

          </div>
          <div>
          <AccountCircleIcon />
          </div>
          <div className={styles.profile_info}> 
            <div>Mony Roi</div>
            <div>admin</div>
          </div>
          <div className={styles.profile_arrows}>
            <div className={styles.profile_arrows_icon}>
            <KeyboardArrowDownOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Navbar
