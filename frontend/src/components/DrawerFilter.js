import React from 'react';
import {Drawer, makeStyles, IconButton,useTheme} from '@material-ui/core';
// import Button from '@material-ui/core/Button';
// import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListasFilter from './ListasFilter'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles((theme)=>({
  list: {
    width: 300,
  },
  fullList: {
    width: 'auto',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: 300,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 300,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -240,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));










 const DrawerFilter = (props) => {
  const classes = useStyles();
  const theme = useTheme();
 

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={props.open}
        onClose={props.onClose ? props.onClose: null}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <a className="logo-drawer" href="/"><img className="casaforte" src='/img/Icons/LOGO_CASA_FORTE.png' alt="casaforte"/></a>

      <div className={classes.drawerHeader}>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
       
        <h2 className="titulo-filter">Filtros</h2>
        <ListasFilter/>
         
       
       
   
      </Drawer>
      
    </div>
  );
}

export default DrawerFilter