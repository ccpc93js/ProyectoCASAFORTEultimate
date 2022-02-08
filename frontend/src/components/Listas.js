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
    },

    link:{
        color:'#808080'
    }

    
})


export const handleCategoryOpen = () => {
    const categoriasDrop = document.querySelector(".categoriasDrawerDrop");
    const mobileItem = document.querySelector(".mobile-item");

    categoriasDrop.classList.toggle("categoriasDrawerUp")
    mobileItem.classList.toggle("ArrowDropDownIcon")


};
const Listas =()=> {

    const classes = useStyles()



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
                    <Link href="/all" underline="none" className={classes.link}>
                             Productos 
                    </Link>
                        </ListItemText>

                        <IconButton  className="mobile-item ArrowDropDownIcon" onClick={handleCategoryOpen}>
                        <ArrowDropDownIcon className=""/>

                        </IconButton>
                        {/* <IconButton
                         onClick={handleDrawerOpen}


                        >
                            <ArrowDropDownIcon/>
                        </IconButton>
                        <IconButton
                         onClick={handleDrawerClose}

                        >
                            <ArrowDropUpIcon/>
                        </IconButton> */}
                        </ListItem>
                    </Link>
                     <div className="categoriasDrawerDrop categoriasDrawerUp">
                        <ul>
                             <li><a href="/categorias/abrasivos">Abrasivos</a></li>
                             <li><a href="/categorias/accesorios-para-herramientas">Accesorios para Herramientas</a></li>
                             <li><a href="/categorias/amarres">Amarres</a></li>
                             <li><a href="/categorias/cerrajeria">Cerrajeria</a></li>
                             <li><a href="/categorias/construccion">Construcci&oacute;n</a></li>
                        </ul>

                        <ul>
                            <li><a href="/categorias/electricos">Electricos</a></li>
                            <li><a href="/categorias/fijaciones">Fijaciones</a></li>
                            <li><a href="/categorias/griferia-y-plomeria">Griferia y Plomeria</a></li>
                            <li><a href="/categorias/pegantes-y-adhesivos">Pegantes & Adhesivos</a></li>
                            <li><a href="/categorias/pinturas">Pinturas</a></li>
                        </ul>
                        <ul>
                            <li><a href="/categorias/herramientas-manuales">Herramientas manuales</a></li>

                        </ul>
                </div>

                <Link href="/marcas" underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                             Marcas
                        </ListItemText>
                        </ListItem>
                    </Link>
                    <Link href="/ofertas" underline="none">
                    <ListItem button>
                        <ListItemText className={classes.listas}>
                             Ofertas
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