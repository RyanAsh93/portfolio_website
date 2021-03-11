import React from 'react';
import { 
    withStyles,
    Grid,
 } from '@material-ui/core'
import { 
    PersonOutlineOutlined,
    Star,
    StarBorder,
    StarHalf,
 } from '@material-ui/icons';

const styles = theme => ({
    aboutSection: {
        textAlign: 'center',
        backgroundColor: '#2c3e50',
        height: '650px',
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
        //   top: '45%',
        //   bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
          paddingRight: '600px',
          color: '#FFFAF0',
          textAlign: 'center',
          fontSize: '60px',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
        //   display:'inline',
      },

      skillsHeader: {
        left: '0%',
        right: '0%',
        top: '45%',
        // bottom: '10px',
        zIndex: '10',
        paddingTop: '20px',
        // paddingRight: '700px',
        color: '#FFFAF0',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        fontWeight: '700',
        // display:'inline',
    },

      aboutPara: {
          left: '0%',
          right: '0%',
          top: '60%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '50px',
          paddingRight: '200px',
          color: '#FFFAF0',
          textAlign: 'center',
          fontSize: '20px',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
          width: '600px',
        //  display:'inline',
      },

      skillsPara: {
        left: '0%',
        right: '0%',
        // top: '60%',
        // bottom: '10px',
        zIndex: '10',
        // paddingTop: '20px',
        // paddingBottom: '20px',
        paddingLeft: '325px',
        // paddingRight: '200px',
        color: '#FFFAF0',
        textAlign: 'left',
        fontSize: '20px',
        fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        fontWeight: '700',
        // width: '100px',
        // display:'inline',
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
                <div>
                <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item>
                <h1 className={classes.aboutHeader}>About Me</h1>
                </Grid>
                <Grid item>
                <h1 className={classes.skillsHeader}>Skills</h1>
                </Grid>
                </Grid>
                </div>
                {/* <PersonOutlineOutlined className={classes.aboutIcon} /> */}
                <div>
                <Grid container spacing={1}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                <p className={classes.aboutPara}>I used to be a Turbo Technicain/Machinist until I had the opportunity to persue my dreams of becoming a software engineer.
                I was able to attend, and graduate from DevPoint Labs through the University of Utah. An 11 Week bootcamp course covering various front end to back end frameworks,
                 along with supporting tools. Quick learning, and a strong network of senior engineers which fed my desire to excel in this space. 
                 I'm seeking a challenging, and growing opportunity in the software engineering world.</p>
                 </Grid>
                 <Grid item xs={6}>
                 <p className={classes.skillsPara}><Star /><Star /><Star /><Star /><StarBorder/>ReactJS</p>
                 <p className={classes.skillsPara}><Star /><Star /><Star /><Star /><StarBorder/>HTML5</p>
                 <p className={classes.skillsPara}><Star /><Star /><Star /><Star /><StarBorder/>CSS</p>
                 <p className={classes.skillsPara}><Star /><Star /><Star /><StarHalf /><StarBorder/>Javascript</p>
                 <p className={classes.skillsPara}><Star /><Star /><Star /><StarHalf /><StarBorder/>Ruby</p>
                 <p className={classes.skillsPara}><Star /><Star /><Star /><StarHalf /><StarBorder/>Ruby On Rails</p>
                 <p className={classes.skillsPara}><Star /><Star /><StarHalf /><StarBorder/><StarBorder/>PostgreSQL</p>
                 <p className={classes.skillsPara}><Star /><Star /><StarHalf /><StarBorder/><StarBorder/>NodeJS</p>
                 </Grid>
                 </Grid>
                 </div>
            </div>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe)