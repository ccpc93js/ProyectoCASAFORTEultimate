import React from 'react'
import SearchBar from './SearchBar'
import './ModalSearch.css'
import ClearIcon from '@material-ui/icons/Clear';
import { IconButton } from '@material-ui/core';



export default function ModalSearch(props) {



  const body = (
    <div className='modalSearch'>
      
      <IconButton
       className="ClearIcon"
       onClick={props.handleSearhModalClose}
       color="inherit"
       >
         <i   className="ClearIcon">
        <ClearIcon/>

         </i>
      </IconButton>
    

    
      <SearchBar/>
              
    </div>
  );

  return (
    <div    
    className="Modal " //Modal-close
    >

      <div className="Body-Modal">
        {body}
      </div>
    </div>
  );
}
