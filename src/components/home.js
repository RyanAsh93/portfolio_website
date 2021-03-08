import React from 'react';
import { 
    withStyles,
    Button,
 } from '@material-ui/core';
import { 
    LaptopMac,
    GetApp,
 } from '@material-ui/icons';
import MyPDF from './resume.pdf';

const styles = theme => ({
    homeSection: {
        textAlign: 'center',
        backgroundColor: '#FFFAF0',
        height: '850px',
        width: '100%',
        // marginTop: '80px',
        paddingTop: '0',
        display: 'block',
        marginBottom: '-100px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    flexCaption: {
        position: 'absolute',
          left: '0%',
          right: '0%',
          top: '45%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
          paddingBottom: '20px',
          color: '#696969',
          textAlign: 'center',
          fontSize: '60px',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
      },
      
      flexCaptionPara: {
        position: 'absolute',
          left: '0%',
          right: '0%',
          top: '60%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
          paddingBottom: '20px',
          color: '#696969',
          textAlign: 'center',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
      },

      homeIcon: {
        // position: 'absolute',
        //   left: '0%',
        //   right: '0%',
          marginLeft: 'auto',
          marginRight: 'auto',
          top: '50%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '200px',
          paddingBottom: '20px',
          color: '#696969',
          alignItems: 'center',
          fontSize: '200px',
      },
      buttonDownload: {
        // position: 'absolute',
          marginLeft: 'auto',
          marginRight: 'auto',
          bottom: '-180px',
          zIndex: '10',
          padding: '15px',
          color: '#696969',
          alignItems: 'center',
          fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
          fontWeight: '700',
      }
})

class Home extends React.Component {
    render() {

        const {
            classes,
          } = this.props;
        
        return (
            <div id="home"  className={classes.homeSection}>
                <LaptopMac className={classes.homeIcon} />
                <h1 className={classes.flexCaption}>Hi, I'm Ryan</h1>
                <h2 className={classes.flexCaptionPara}>Full Stack Engineer - Web Developer - Web Designer</h2>
                <div>
                <Button
                    variant="outlined"
                    color="#FFFAF0"
                    className={classes.buttonDownload}
                    startIcon={<GetApp />}
                    a href={MyPDF} download="resume.pdf">Download Resume</Button>
                    </div>
            </div>
        )
    }
}


export default withStyles(styles)(Home);
