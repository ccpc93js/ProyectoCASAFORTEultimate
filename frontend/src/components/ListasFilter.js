import React from 'react'
// import {makeStyles} from '@material-ui/core'
import './Listas.css'
import { List, Divider } from '@material-ui/core'
// import IconButton from '@material-ui/core/IconButton';
import WidgetFiltersDrawer from './WidgetFiltersDrawer'



// const useStyles = makeStyles({
//     listas:{
//         color: '#808080',
//         fontSize: '60px',
//         fontWeight: 500,
//     }


// })

const ListasFilter = (props) => {
    const { productos, categorias, subcategorias, marcas, nuevos } = props

    // const classes = useStyles()



    return (
        <div className="Listas">
            <List component="nav">


                <WidgetFiltersDrawer
                    productos={productos}
                    categorias={categorias}
                    subcategorias={subcategorias}
                    marcas={marcas}
                    nuevos={nuevos}
                />




                <Divider />
            </List>
        </div>
    )

}

export default ListasFilter