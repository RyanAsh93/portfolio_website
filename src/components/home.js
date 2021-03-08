import React from 'react';
import { withStyles } from '@material-ui/core';
import { LaptopMac } from '@material-ui/icons';

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
          fontFamily: 'Oswald',
          textAlign: 'center',
          fontSize: '60px',
        //   textTransform: 'uppercase',
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
          fontFamily: 'Oswald',
          textAlign: 'center',
        //   textTransform: 'uppercase',
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
            </div>
        )
    }
}


export default withStyles(styles)(Home);
