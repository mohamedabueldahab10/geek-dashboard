import React from 'react'
import styles from "./Body.module.css";
import {Box , Button} from "@mui/material"
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import AttachMoneySharpIcon from '@mui/icons-material/AttachMoneySharp';
import DescriptionIcon from '@mui/icons-material/Description';
import AddchartSharpIcon from '@mui/icons-material/AddchartSharp'
import WifiTetheringErrorIcon from '@mui/icons-material/WifiTetheringError';
const Body = () => {
    const [selectedOption, setSelectedOption] = React.useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className={styles.bodyContainer}>
        <div className={styles.filterContainer}>
            <Box sx={{color:"#fff", fontSize:"32px",fontWeight:"700",textAlign:"center",lineHeight :"104.24px"}}>
                Filters 
            </Box>
            <div className={styles.selectContainer}>
                <Box sx={{fontSize:"14px",fontWeight:"500",color:"#fff"}}>
                    Industry
                </Box>
                <div className={styles.selectBox}>
                <Select
                    value={selectedOption}
                    onChange={handleChange}
                    displayEmpty
                    className={styles.select}
                    >
                    <MenuItem value="" selected>
                        <em>Health Care</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                    <button type="button"><LayersOutlinedIcon /></button>
                </div>
                <Box sx={{fontSize:"14px",fontWeight:"400", color:"#6B6B6B"}}>
                    Choose Something
                </Box>
            </div>
            <div className={styles.selectContainer}>
                <Box sx={{fontSize:"14px",fontWeight:"500",color:"#fff"}}>
                    Market Cap
                </Box>
                <div className={styles.selectBox}>
                <Select
                value={selectedOption}
                onChange={handleChange}
                displayEmpty
                    className={styles.select}
                    >
                    <MenuItem value="" selected>
                        <em>Large-Cap</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                    <button type="button"><LayersOutlinedIcon /></button>
                </div>
                <Box sx={{fontSize:"14px",fontWeight:"400", color:"#6B6B6B"}}>
                    Press apply to see changes
                </Box>
            </div>
            <div className={styles.selectContainer}>
                <Box sx={{fontSize:"14px",fontWeight:"500",color:"#fff"}}>
                    Risk
                </Box>
                <div className={styles.selectBox}>
                <Select
                value={selectedOption}
                onChange={handleChange}
                displayEmpty
                    className={styles.select}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                    <button type="button"><LayersOutlinedIcon /></button>
                </div>
                <Box sx={{fontSize:"14px",fontWeight:"400", color:"#6B6B6B"}}>
                    Choose Something
                </Box>
            </div>
            <div className={styles.selectContainer}>
               <Box sx={{width:"100%"}}>
                <Button sx={{borderRadius:"14px", backgroundColor:"#554DB7", width:"100%", height:"70.43px",color:"#fff"}}>Apply Filters</Button>
               </Box>
            </div>
        </div>
        {/* --------------------------------------------------------------- */}
        <div className={styles.rightContainer}>
        <div className={styles.info}>
            <div className={styles.tabsContainer}>
                <div className={styles.tab}>
                    <div><AttachMoneySharpIcon className={styles.tabsIcon} /> </div><div>$TSLA</div>
                </div>
                <div className={styles.tab}>
                    <div><DescriptionIcon className={styles.tabsIcon} /> </div><div>200 Contracts</div>
                </div>
                <div className={styles.tab}>
                    <div  className={styles.tabsIcon} > 
                   <AddchartSharpIcon />
                    </div>
                    <div>12.2%</div>
                </div>
                <div className={styles.lastTab}>
                    <div>
                    <WifiTetheringErrorIcon className={styles.tabsIcon} /> 
                    </div>  
                    <div>High Risk</div>
                </div>
            </div>
            <div className={styles.tabsContainer}>
                <p className={styles.firstDesc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
            </div>
        </div>
        <div className={styles.tabsContainer}>
                <p className={styles.desc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
        </div>
        <div className={styles.tabsContainer}>
                <p className={styles.desc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
        </div>
        <div className={styles.tabsContainer}>
                <p className={styles.desc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
        </div>
        <div className={styles.tabsContainer}>
                <p className={styles.desc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
        </div>
        <div className={styles.tabsContainer}>
                <p className={styles.desc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
        </div>
        <div className={styles.tabsContainer}>
                <p className={styles.desc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
        </div>
        <div className={styles.tabsContainer}>
                <p className={styles.desc}>
                    Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.
                </p>
        </div>
        </div>
    </div>
  )
}

export default Body
