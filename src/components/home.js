import React from 'react';
import { 
    withStyles,
    Button,
    Grid,
 } from '@material-ui/core';
import { 
    LaptopMac,
    GetApp,
 } from '@material-ui/icons';
import MyPDF from './resume.pdf';
import MyDOCX from './coverletter.docx';

const styles = theme => ({
    homeSection: {
        textAlign: 'center',
        backgroundColor: '#FFFAF0',
        height: '925px',
        width: '100%',
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
                <Grid container
                    spacing={6}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12}>
                <LaptopMac className={classes.homeIcon} />
                </Grid>
                <Grid item xs={12}>
                <h1 className={classes.flexCaption}>Hi, I'm Ryan</h1>
                </Grid>
                <Grid item xs={12}>
                <h2 className={classes.flexCaptionPara}>Full Stack Engineer - Web Developer - Web Designer</h2>
                </Grid>
                    </Grid>
                <div>
                    <Grid container
                        // spacing={2}
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                <Grid item xs={2}>
                <Button
                    variant="outlined"
                    color="#FFFAF0"
                    className={classes.buttonDownload}
                    startIcon={<GetApp />}
                    a href={MyPDF} download="resume.pdf">Download Resume</Button>
                </Grid>
                <Grid item xs={2}>
                <Button
                    variant="outlined"
                    color="#FFFAF0"
                    className={classes.buttonDownload}
                    startIcon={<GetApp />}
                    a href={MyDOCX} download="coverletter.docx">Download CL</Button>
                </Grid>
                </Grid>
                    </div>
            </div>
        )
    }
}


export default withStyles(styles)(Home);
