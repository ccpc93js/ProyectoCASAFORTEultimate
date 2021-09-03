import React from 'react'
import {makeStyles} from '@material-ui/core'
import './Listas.css'
import {List,ListItem,ListItemText,Divider,Link} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import WidgetFiltersDrawer from './WidgetFiltersDrawer'



const useStyles = makeStyles({
    listas:{
        color: '#808080',
        fontSize: '60px',
        fontWeight: 500,
    }

    
})

const ListasFilter =(props)=> {

    const classes = useStyles()

    
   
  const [openCategorias,setopenCategorias]= React.useState("categoriasDrawerUp")
  const handleDrawerOpen = () => {
        setopenCategorias("categoriasDrawerDrop");
  };
  const handleDrawerClose = () => {
    setopenCategorias("categoriasDrawerUp");
  };

     

        return (
            <div className="Listas">
                <List component="nav">

              
            <WidgetFiltersDrawer

            />
            
                           
                  
                    
                    <Divider/>
                </List>
            </div>
        )
    
}

export default ListasFilter