import React from 'react';
import {
    withStyles,
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails,
} from '@material-ui/core';
import { 
    MoreHoriz,
    ExpandMore,
 } from '@material-ui/icons';

const styles = theme => ({
    projectSection: {
        textAlign: 'center',
        backgroundColor: '#FFFAF0',
        height: '650px',
        width: '100%',
        // marginTop: '80px',
        paddingTop: '0',
        display: 'block',
        marginBottom: '-100px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    
    projectHeader: {
        // position: 'absolute',
        left: '0%',
        right: '0%',
        top: '45%',
        bottom: '10px',
        zIndex: '10',
        paddingTop: '20px',
        //   paddingBottom: '10px',
        color: '#696969',
        textAlign: 'center',
        fontSize: '60px',
        fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        fontWeight: '700',
    },
    
    projectIcon: {
        color: '#696969',
        fontSize: '100px',
    },
    
    panelStyle: {
        textAlign: 'center',
        left: '20%',
        right: '0%',
        width: '60%',
        backgroundColor: '#FFFAF0',
        color: '#696969',
        textDecoration: 'inherit',
        // '&:hover': {
        //     backgroundColor: '#696969',
        //     color: '#FFFAF0',
        //   },
      },
      panelLink: {
        textDecoration: 'inherit',
        color: '#696969',
        '&:hover': {
            color: '#2c3e50',
          },
      }
    //   panelStyle:hover {
    //     background-color: #003058;
    //     color: #fff;
    //   }
})



class Projects extends React.Component {
    
    render() {
        const { classes } = this.props
        return (
            <div id="projects" className={classes.projectSection}>
                <h1 className={classes.projectHeader}>Portfolio</h1>
                <MoreHoriz className={classes.projectIcon} />
                <div className={classes.root}>
                <ExpansionPanel className={classes.panelStyle} >
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography >LakePoint Insurance Agency</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Building a landing page for a local insurance company.
          </Typography>
          <Typography>
          <a className={classes.panelLink} href="https://lakepointinsurance.mybluemix.net"> Click Here For Link</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panelStyle}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography >Student List</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Built an app using an API to filter, and display students infomation.
          <a className={classes.panelLink} href="https://hatchwaysassessment.mybluemix.net"> Click Here For Link</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panelStyle}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography >Digital Glove Box</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails >
          <Typography>
          I worked on the Car Profile page, Edit Vehicle Form, and landing page.
          <a className={classes.panelLink} href="https://digital--glovebox.herokuapp.com"> Click Here For Link</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panelStyle}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography >Shopping List App</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Built an app where you can add, delete, and cross off items for your shopping list.
          <a className={classes.panelLink} href="https://pocket-shopping-list.herokuapp.com"> Click Here For Link</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel className={classes.panelStyle}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <Typography >Traise Landing Page</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Personal project with my brother, Started as a template but have been adding and removing multiple features.
          <a className={classes.panelLink} href="https://traise-dev.mybluemix.net"> Click Here For Link</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
            </div>
        )
    }
}

export default withStyles(styles)(Projects);
