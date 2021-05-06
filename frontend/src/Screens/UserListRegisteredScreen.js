import React, { useEffect, useState } from 'react';
import './UserListScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { createUser,  deleteUserInfo, listUsersRegistered } from '../actions/userActions';
import LoadingBox from '../component/LoadingBox';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { USER_CREATE_RESET, USER_DELETE_RESET, USER_DETAILS_RESET } from '../constants/userConstants';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import EditIcon from '@material-ui/icons/Edit';


export default function UserListRegisteredScreen(props) {
  const[searchTerm, setSearchTerm] = useState("");



  const userListRegistered = useSelector((state) => state.userListRegistered);
  const { loading, error, usersInfo } = userListRegistered;

//   const userCreate = useSelector((state) => state.userCreate);
//   const {
//     loading: loadingCreate,
//     error: errorCreate,
//     success: successCreate,
//     user: createdUser,
//   } = userCreate;


  const userInfoDelete = useSelector((state) => state.userInfoDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userInfoDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  useEffect(() => {
    // if (successCreate) {
    //   dispatch({ type: USER_CREATE_RESET });
    //   props.history.push(`/user/${createdUser._id}/edit`);
    // }
    if (successDelete) {
      dispatch({ type: USER_DELETE_RESET });
    }
    dispatch(listUsersRegistered());
    // dispatch({
    //   type: USER_DETAILS_RESET,
    // });
  }, [
    // createdUser,
    dispatch, 
    // props.history,
    // successCreate,
    successDelete,
    userInfo._id
  ]);
  const deleteHandler = (user) => {
    if (window.confirm('Estas seguro?')) {
      dispatch(deleteUserInfo(user._id));
    }
  };

//   const createHandler = () => {
//     dispatch(createUser());
//   };
  return (
    <div className="userListContainer">
      <div className="row">

      <h1 className="titulelist"> Info de U R</h1>
      <input 
        className="inputSearchPL"
         type="text"
         placeholder="Buscar info usuario..." 
         onChange={(e) =>{setSearchTerm(e.target.value)}}
         />
        {/* <button type="button" className="button-success shadow-button" onClick={createHandler}>
          Crear Usuario
        </button> */}
      </div>

      {loadingDelete && <LoadingBox/>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">Usuario eliminado satisfactoriamente</MessageBox>
      )}
        {/* {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}  */}
      {loading ? (
        <div className="loading-div">
           <LoadingBox/>
        </div>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th >NOMBRE</th>
              <th className="table-hidden">TIPO DE DOCUMENTO</th>
              <th className="table-hidden">N DOCUMENTO</th>
              <th className="table-hidden">DEPARTAMENTO</th>
              <th className="table-hidden">CIUDAD</th>
              <th className="table-hidden">DIRECCION</th>
              <th className="table-hidden">EMAIL</th>
              <th className="table-hidden">TELEFONO</th>
              <th className="table-hidden">CELULAR</th>
              <th className="table-hidden">TIPO DE CLIENTE</th>
              <th >ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
                usersInfo.filter((user)=>{
                  if (searchTerm === ""){
                    return user
                  }else if  (user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                  }else if  (user.tDocument.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                }else if  (user.department.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                }else if  (user.city.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                }else if  (user.adress.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                }else if  (user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                }else if  (user.tipoClient.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user

                  }            
            
                }).map((user) => (
              <tr key={user._id}>
                <td >{user.name}</td>
                <td className="table-hidden">{user.tDocument}</td>
                <td className="table-hidden">{user.nDocument}</td>
                <td className="table-hidden">{user.department}</td>
                <td className="table-hidden">{user.city}</td>
                <td className="table-hidden">{user.adress}</td>
                <td className="table-hidden">{user.email}</td>
                <td className="table-hidden">{user.tel}</td>
                <td className="table-hidden">{user.cel}</td>
                <td className="table-hidden">{user.tipoClient}</td>
                <td>
                  {/* <IconButton
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/user/${user._id}/edit`)}
                  >
                    <EditIcon />

                  </IconButton> */}
                  <IconButton
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(user)}
                  >
                     <DeleteForeverIcon className="button-remove"/>

                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
