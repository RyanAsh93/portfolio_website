import React from 'react';
import {
    withStyles,
    Typography,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Grid,
    Paper,
} from '@material-ui/core';
import { 
    MoreHoriz,
    TouchApp,
 } from '@material-ui/icons';
 import LakePoint from '../components/lakepoint.png'
 import StudentList from '../components/studentList.png'
 import DigitalGloveBox from '../components/digitalGloveBox.png'
 import ShoppingList from '../components/shoppingList.png'
 import TraiseLanding from '../components/traiseLanding.png'

const styles = theme => ({
    projectSection: {
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
    
    projectHeader: {
        left: '0%',
        right: '0%',
        top: '45%',
        bottom: '10px',
        zIndex: '10',
        paddingTop: '20px',
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
      },
      panelLink: {
        textDecoration: 'inherit',
        color: '#696969',
        '&:hover': {
            color: '#2c3e50',
          },
      },
      root: {
          backgroundColor: '#F8F8FF',
      },
      media: {
        height: 140,
      },
      btnStyle: {
          color: '#696969',
          border: '1px solid #696969'
      },
      cardHeader: {
        fontSize: '22px',
        color: '#696969',
        fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        fontWeight: '800',
      },
      cardPara: {
        fontSize: '12px',
        color: '#696969',
        fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        fontWeight: '700',
      }
})

class Portfolio extends React.Component {
    
    render() {
        const { classes } = this.props
        return (
            <div id="portfolio" className={classes.projectSection}>
                <h1 className={classes.projectHeader}>Portfolio</h1>
                <MoreHoriz className={classes.projectIcon} />
                <div>
                <Grid container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        <Grid item xs={4}>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={LakePoint}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.cardHeader} gutterBottom variant="h5" component="h2">
            LakePoint Insurance
          </Typography>
          <Typography className={classes.cardPara} variant="body2" color="textSecondary" component="p">
          Building a landing page for a local insurance company using reactjs, material-ui, and css.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        className={classes.btnStyle}
        size="small"
        target="_blank"
        rel="noopener noreferrer" 
        href="https://lakepointinsurance.mybluemix.net"
        startIcon={<TouchApp />}
        >
        Click Here
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={StudentList}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.cardHeader} gutterBottom variant="h5" component="h2">
            Student List
          </Typography>
          <Typography className={classes.cardPara} variant="body2" color="textSecondary" component="p">
          Built an app using an API to filter, and display students infomation, using Reactjs.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
        className={classes.btnStyle} 
        size="small"
        target="_blank"
        rel="noopener noreferrer" 
        href="https://hatchwaysassessment.mybluemix.net/"
        startIcon={<TouchApp />}
        >
        Click Here
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={DigitalGloveBox}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.cardHeader} gutterBottom variant="h5" component="h2">
            Digital Glove Box
          </Typography>
          <Typography className={classes.cardPara} variant="body2" color="textSecondary" component="p">
          Finale project at DevPoint Labs, using Ruby, Ruby on Rails, ReactJS, and Bootstrap.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        className={classes.btnStyle}
        size="small"
        target="_blank"
        rel="noopener noreferrer" 
        href="https://digital--glovebox.herokuapp.com/"
        startIcon={<TouchApp />}
        >
        Click Here
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
                <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ShoppingList}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.cardHeader} gutterBottom variant="h5" component="h2">
            Shopping List App
          </Typography>
          <Typography className={classes.cardPara} variant="body2" color="textSecondary" component="p">
          Built an app where you can add, delete, and cross off items for your shopping list, using Ruby, Ruby on Rails, Reactjs.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        className={classes.btnStyle}
        size="small"
        target="_blank"
        rel="noopener noreferrer" 
        href="https://pocket-shopping-list.herokuapp.com"
        startIcon={<TouchApp />}
        >
        Click Here
        </Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={TraiseLanding}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.cardHeader} gutterBottom variant="h5" component="h2">
            Traise Landing Page
          </Typography>
          <Typography className={classes.cardPara} variant="body2" color="textSecondary" component="p">
          Currently building a landing page for our SAAS software company using reactjs, material-ui, and css.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
        className={classes.btnStyle}
        size="small"
        target="_blank"
        rel="noopener noreferrer" 
        href="https://traise-dev.mybluemix.net/"
        startIcon={<TouchApp />}
        >
        Click Here
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </div>
            </div>
        )
    }
}

export default withStyles(styles)(Portfolio);
