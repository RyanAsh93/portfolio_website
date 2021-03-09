import React from 'react';
import { withStyles } from '@material-ui/core'
import { 
    PersonOutlineOutlined,
 } from '@material-ui/icons';

const styles = theme => ({
    aboutSection: {
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

    aboutHeader: {
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

      aboutPara: {
          left: '0%',
          right: '0%',
          top: '60%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '200px',
          paddingRight: '200px',
          color: '#FFFAF0',
          textAlign: 'center',
          fontSize: '20px',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
      },

      aboutIcon: {
          color: '#FFFAF0',
          fontSize: '100px',
      }
});

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div>
            <div id="aboutMe"  className={classes.aboutSection}>
                <h1 className={classes.aboutHeader}>About Me</h1>
                <PersonOutlineOutlined className={classes.aboutIcon} />
                <p className={classes.aboutPara}>I used to be a Turbo Technicain/Machinist until I had the opportunity to fullfill my dreams of becoming a software engineer.
                I was able to attend, and graduate from DevPoint Labs through the University of Utah. An 11 Week bootcamp course covering various front end to back end frameworks,
                 along with supporting tools. Quick learning, and a strong network of senior engineers which fed my desire to excel in this space. 
                 I'm seeking a challenging, and growing opportunity in the software engineering world.</p>
            </div>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe)