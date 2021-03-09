import React from 'react';
import { 
    withStyles,
    Grid,
    Tooltip,
 } from '@material-ui/core'
import { 
    LinkedIn,
    GitHub,
    Email,
    CloudDownload,
 } from '@material-ui/icons';
import MyPDF from './resume.pdf';

const styles = theme => ({
    contactSection: {
        textAlign: 'center',
        backgroundColor: '#2c3e50',
        height: '550px',
        width: '100%',
        paddingTop: '0',
        display: 'block',
        marginBottom: '-100px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    contactHeader: {
          left: '0%',
          right: '0%',
          top: '45%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
          color: '#FFFAF0',
          textAlign: 'center',
          fontSize: '60px',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
      },

    contactIcons: {
        color: '#FFFAF0',
        fontSize: '80px',
        padding: '8px',
        border: '3px solid white',
        borderRadius: '50%',
        cursor: 'pointer',
        '&:hover': {
            color: '#FAF0E6',
          },
    },
    })

class Contact extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="contact"  className={classes.contactSection}>
                <h1 className={classes.contactHeader}>Links & Contacts</h1>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
             <Grid item xs={1}>
             <Tooltip title="LinkedIn" placement="top">
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryansashworth/"><LinkedIn className={classes.contactIcons}/></a>
                </Tooltip>
                </Grid>
             <Grid item xs={1}>
             <Tooltip title="GitHub" placement="top">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/RyanAsh93"><GitHub className={classes.contactIcons}/></a>
          </Tooltip>
                </Grid>
             <Grid item xs={1}>
             <Tooltip title="Email" placement="top">
                <a href="mailto:ryanashworth93@yahoo.com"><Email className={classes.contactIcons}/></a>
                </Tooltip>
                </Grid>
                <Grid item xs={1}>
             <Tooltip title="Download Resume" placement="top">
                <a href={MyPDF} download="resume.pdf"><CloudDownload className={classes.contactIcons}/></a>
                </Tooltip>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Contact);
