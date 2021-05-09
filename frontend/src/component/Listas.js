import React from 'react'
import {makeStyles} from '@material-ui/core'
import './Listas.css'
import {List,ListItem,ListItemText,Divider,Link} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';


const useStyles = makeStyles({
    listas:{
        color: '#808080',
        fontSize: '60px',
        fontWeight: 500,
    }

    
})

const Listas =()=> {

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

                <Link href="/" underline="none">
                    <ListItem button>
                         <ListItemText  className={classes.listas}>
                            Inicio
                         </ListItemText>
                    </ListItem>
                    </Link>
                    
                    <Link href="/nosotros" underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                            Nosotros
                        </ListItemText>                          
                    </ListItem>
                    </Link>
                    <Link  underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                             Productos 
                        </ListItemText>

                        {/* <button id="icon-drop">
                        <ArrowDropDownIcon/>

                        </button> */}
                        <IconButton
                         onClick={handleDrawerOpen}

                        >
                            <ArrowDropDownIcon/>
                        </IconButton>
                        <IconButton
                         onClick={handleDrawerClose}

                        >
                            <ArrowDropUpIcon/>
                        </IconButton>
                        </ListItem>
                    </Link>
                     <div className={openCategorias}>
                        <ul>
                             <li><a href="/abrasivos">Abrasivos</a></li>
                             <li><a href="/accesorios-para-herramientas">Accesorios para Herramientas</a></li>
                             <li><a href="/amarres">Amarres</a></li>
                             <li><a href="/cerrajeria">Cerrajeria</a></li>
                             <li><a href="/construccion">Construcci&oacute;n</a></li>
                        </ul>

                        <ul>
                            <li><a href="/electricos">Electricos</a></li>
                            <li><a href="/fijaciones">Fijaciones</a></li>
                            <li><a href="/griferia-y-plomeria">Griferia y Plomeria</a></li>
                            <li><a href="/pegantes-y-adhesivos">Pegantes & Adhesivos</a></li>
                            <li><a href="/pinturas">Pinturas</a></li>
                        </ul>
                        <ul>
                            <li><a href="/herramientas-manuales">Herramientas manuales</a></li>

                        </ul>
                </div>

                <Link href="/marcas" underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                             Marcas
                        </ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/nuevos" underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                             Nuevos
                        </ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/contactenos" underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                            Cont&aacute;ctanos
                        </ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/signin" underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                            Clientes
                        </ListItemText>
                        </ListItem>
                    </Link>

            

            
            
                           
                  
                    
                    <Divider/>
                </List>
            </div>
        )
    
}

export default Listas