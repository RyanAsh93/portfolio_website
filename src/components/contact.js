import React from 'react';
import { 
    withStyles,
    Grid,
 } from '@material-ui/core'
import { 
    LinkedIn,
    GitHub,
    Email,
 } from '@material-ui/icons';

const styles = theme => ({
    contactSection: {
        textAlign: 'center',
        backgroundColor: '#2c3e50',
        height: '550px',
        width: '100%',
        // marginTop: '80px',
        paddingTop: '0',
        display: 'block',
        marginBottom: '-100px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    contactHeader: {
        // position: 'absolute',
          left: '0%',
          right: '0%',
          top: '45%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
        //   paddingBottom: '10px',
          color: '#FFFAF0',
          textAlign: 'center',
          fontSize: '60px',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
      },

    contactIcons: {
        // justifyContent: 'space-between',
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
            <div id="aboutMe"  className={classes.contactSection}>
                <h1 className={classes.contactHeader}>Links & Contacts</h1>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
             <Grid item xs={1}>
          <a href="https://www.linkedin.com/in/ryansashworth/"><LinkedIn className={classes.contactIcons}/></a>
                </Grid>
             <Grid item xs={1}>
          <a href="https://github.com/RyanAsh93"><GitHub className={classes.contactIcons}/></a>
                </Grid>
             <Grid item xs={1}>
                <a href="mailto:ryanashworth93@yahoo.com"><Email className={classes.contactIcons}/></a>
                </Grid>
                </Grid>
            </div>
        )
    }
}

{/* <a className="footerEmail" href="mailto:dan@lakepointins.com"> dan@lakepointins.com</a></li> */}

export default withStyles(styles)(Contact);
