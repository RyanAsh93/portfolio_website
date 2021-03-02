import React from 'react'
import {
// AppBar,
// Toolbar,
// IconButton,
// Typography,
// MenuIcon,
withStyles,
}
from '@material-ui/core'
// import Testimonial from './testimonial'

const styles = theme => ({
    nav: {
        position: 'fixed',
        zIndex: '2000',
        top: '0',
        width: '100%',
        height: '80px',
        margin: '0' ,
        padding: '0',
        listStyle: 'none',
        backgroundColor: 'white',
        borderBottom: '1px solid #ccc',
        borderTop: '1px solid #ccc',
      },
      
      navlist: {
            position: 'relative',
            display: 'inline-block',
            lineHeight: '80px',
            margin: '0 5px',
            padding: '8px 15px',
            textDecoration: 'none',
            fontWeight: 'bold',
            float: 'right',
          },
          navLink: {
            color: '#222222',
            textDecoration: 'none',
            listStyle: 'none',
            fontWeight: '300',
            fontSize: '14px',
            letterSpacing: '1px',
            fontFamily: 'Oswald',
            '&:hover': {
                color: '#003058',
              },
      },
      
      logoStyle: {
        position: 'fixed',
        height: '120px',
        width: '140px',
      },
});

class Navbar extends React.Component {
  render() {

    const { classes } = this.props;
    return (
      <div>
        <ul className={classes.nav}>
        {/* <img className='logoStyle' src={require('../images/logo.png')} />  */}
          {/* <li className={classes.navlist}><a href="#contact" className={classes.navList}>CONTACT</a></li> */}
          {/* <li className='navlist'><a href="#news" className="navLink">NEWS</a></li> */}
          <li className={classes.navlist}><a href="#advisors" className={classes.navLink}>ADVISORS</a></li>
          <li className={classes.navlist}><a href="#whyUs" className={classes.navLink}>WHY US</a></li>
          {/* <li className='navlist'><a href="#testimonial" className="navLink">TESTIMONIALS</a></li> */}
          <li className={classes.navlist}><a href="#projects" className={classes.navLink}>PROJECTS</a></li>
          <li className={classes.navlist}><a href="#aboutMe" className={classes.navLink}>ABOUT ME</a></li>
          <li className={classes.navlist}><a href="#home" className={classes.navLink}>HOME</a></li>
        </ul>
      </div>
      //Backup option for navbar
//       <AppBar position="static">
//   <Toolbar variant="dense">
//     <IconButton edge="start" color="inherit" aria-label="menu">
//       {/* <MenuIcon /> */}
//     </IconButton>
//     <Typography variant="h6" color="inherit">
//       Photos
//     </Typography>
//   </Toolbar>
// </AppBar>
    )
  }
}

export default withStyles(styles)(Navbar);
