import React from 'react'
import {
withStyles,
}
from '@material-ui/core'
import { FontDownload } from '@material-ui/icons';

const styles = theme => ({
    nav: {
        position: 'fixed',
        zIndex: '2000',
        top: '0',
        width: '100%',
        height: '90px',
        margin: '0' ,
        padding: '0',
        listStyle: 'none',
        backgroundColor: '#2c3e50',
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
            color: '#FFFAF0',
            textDecoration: 'none',
            listStyle: 'none',
            fontWeight: '700',
            fontSize: '18px',
            letterSpacing: '1px',
            fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
            '&:hover': {
                color: '#FAF0E6',
              },
        },
        logoStyle: {
          position: 'fixed',
          color: '#FFFAF0',
          margin: '0 200px',
          marginTop: '25px',
          cursor: 'pointer',
              textDecoration: 'none',
              listStyle: 'none',
              fontWeight: '700',
              fontSize: '35px',
              fontFamily: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
              '&:hover': {
                  color: '#FAF0E6',
                },
          },
          logoIconStyle: {
            position: 'fixed',
            color: '#FFFAF0',
            margin: '0 455px',
            marginTop: '5px',
            fontSize: '80px',
            cursor: 'pointer',
            textDecoration: 'none',
            listStyle: 'none',
            '&:hover': {
                color: '#FAF0E6	',
              },
            },
});

class Navbar extends React.Component {
  render() {

    const { classes } = this.props;
    return (
      <div>
        <ul className={classes.nav}>
        <li><a href="#home" className={classes.logoStyle}>Ryan Ashworth</a></li>
          <a href="#home"><FontDownload className={classes.logoIconStyle} /></a> 
          {/* <li className={classes.navlist}><a href="#contact" className={classes.navList}>CONTACT</a></li> */}
          {/* <li className='navlist'><a href="#news" className="navLink">NEWS</a></li> */}
          {/* <li className={classes.navlist}><a href="#advisors" className={classes.navLink}>ADVISORS</a></li> */}
          <li className={classes.navlist}><a href="#contact" className={classes.navLink}>CONTACT</a></li>
          {/* <li className='navlist'><a href="#testimonial" className="navLink">TESTIMONIALS</a></li> */}
          <li className={classes.navlist}><a href="#projects" className={classes.navLink}>PORTFOLIO</a></li>
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
