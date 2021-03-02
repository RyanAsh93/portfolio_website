import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
    homeSection: {
        textAlign: 'center',
        backgroundColor: 'gray',
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
          top: '50%',
          bottom: '10px',
          zIndex: '10',
          paddingTop: '20px',
          paddingBottom: '20px',
          color: 'white',
          fontFamily: 'Oswald',
          textAlign: 'center',
          textTransform: 'uppercase',
      }
})

class Home extends React.Component {
    render() {

        const {
            classes,
          } = this.props;
        
        return (
            <div id="home"  className={classes.homeSection}>
                <h1 className={classes.flexCaption}>Home page</h1>
            </div>
        )
    }
}


export default withStyles(styles)(Home);
