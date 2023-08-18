import React, { useState } from 'react'
import classes from "./section.module.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Section() {

  const [header, setHeader] = useState("");
  const [details, setDetails] = useState("");
  const [section, setSection] = useState([]);


  const handleHeader = (e) => {
    setHeader(e.target.value)
  }

  const handleDetails = (e) => {
    setDetails(e.target.value)
  }

  const handleAddSection = () => {
    if (header !== '' && details !== '') {
      const newObject = {
        newHeader: header,
        newDetails: details
      };
      setSection([...section, newObject])
      console.log(section);
      setHeader('');
      setDetails('');
    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.leftSection}>
          <h3>Add Section</h3>
          <div className={classes.divHeader}>
            <label htmlFor='sectionHeader'>Section Header</label>
            <input id='sectionHeader' type='text' onChange={handleHeader} value={header}></input>
          </div>
          <div className={classes.divDetails}>
            <label htmlFor='sectionDetails'>Section Details</label>
            <textarea rows={7} id='sectionDetails' type='text' onChange={handleDetails} value={details}></textarea>
          </div>
          <button onClick={handleAddSection}>Add</button>

        </div>
        <div className={classes.rightSection}>

          {section.map((sec,i) => <Accordion>
            <AccordionSummary key={i} sx={{ border: "2px solid" }}
              expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            >
              <Typography>{sec.newHeader}</Typography>
            </AccordionSummary>
            <AccordionDetails key={i} sx={{ border: "2px solid" }}>
              <Typography className={classes.textWrap}>
                {sec.newDetails}
              </Typography>
            </AccordionDetails>
          </Accordion>
          )}
        </div>
      </div>
    </>
  )
}

export default Section
