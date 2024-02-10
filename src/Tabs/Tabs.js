import React from 'react'
// import { Box, IconButton, Input } from "@mui/material";
import styles from "./Tabs.module.css";
const Tabs = () => {
  return (
    <>
    <div className={styles.tabsContainer}>
     <div className={styles.tab}>
        <div className={styles.comingSoon}>coming soon</div>
        <div>Trading</div>
     </div>
     <div className={styles.tab}>
     <div className={styles.comingSoon}>coming soon</div>
        <div>Automation</div>
     </div>
     <div className={styles.tab}>
     <div className={styles.comingSoon}>coming soon</div>
        <div>Portfolio</div>
     </div>
     <div className={`${styles.tab} ${styles.active}`}>
        Alerts
     </div>
     <div className={styles.lastTab}>
        Training
     </div>
    </div>
    
    </>
  )
}

export default Tabs
