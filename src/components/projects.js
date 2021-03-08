import React from 'react';
import {withStyles} from '@material-ui/core';

const styles = theme => ({
    projectSection: {
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
    projectHeader: {
        color: 'white',
    }
})

class Projects extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div id="projects" className={classes.projectSection}>
                <h1 className={classes.projectHeader}>Projects Section</h1>
            </div>
        )
    }
}

export default withStyles(styles)(Projects);
