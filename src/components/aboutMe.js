import React from 'react';
import { withStyles } from '@material-ui/core'

const styles = theme => ({
    aboutSection: {
        textAlign: 'center',
        backgroundColor: '#2c3e50',
        height: '850px',
        width: '100%',
        // marginTop: '80px',
        paddingTop: '0',
        display: 'block',
        marginBottom: '-100px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    aboutHeader: {
        color: 'white',
    }
});

class AboutMe extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div id="aboutMe"  className={classes.aboutSection}>
                <h1 className={classes.aboutHeader}>About Me Section</h1>
            </div>
        )
    }
}

export default withStyles(styles)(AboutMe)