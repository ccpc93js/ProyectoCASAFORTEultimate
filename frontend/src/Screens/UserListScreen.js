import React, { useEffect, useState } from 'react';
import './UserListScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { createUser, deleteUser, listUsers } from '../actions/userActions';
import LoadingBox from '../component/LoadingBox';
// import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { USER_CREATE_RESET, USER_DELETE_RESET, USER_DETAILS_RESET } from '../constants/userConstants';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
export default function UserListScreen(props) {
  const[searchTerm, setSearchTerm] = useState("");



  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userCreate = useSelector((state) => state.userCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    user: createdUser,
  } = userCreate;


  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successCreate) {
      dispatch({ type: USER_CREATE_RESET });
      props.history.push(`/user/${createdUser._id}/edit`);
    }
    if (successDelete) {
      dispatch({ type: USER_DELETE_RESET });
    }
    dispatch(listUsers());
    dispatch({
      type: USER_DETAILS_RESET,
    });
  }, [
    createdUser,
    dispatch, 
    props.history,
    successCreate,
    successDelete,
    userInfo._id
  ]);
  const deleteHandler = (user) => {
    if (window.confirm('Estas seguro?')) {
      dispatch(deleteUser(user._id));
    }
  };

  const createHandler = () => {
    dispatch(createUser());
  };
  return (
    <div className="userListContainer">
      <div className="row">

      <h1 className="titulelist">Usuarios</h1>
      <input 
        className="inputSearchPL"
         type="text"
         placeholder="Buscar usuario..." 
         onChange={(e) =>{setSearchTerm(e.target.value)}}
         />
        <button type="button" className="button-success " onClick={createHandler}>
          Crear Usuario
        </button>
      </div>

      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
      {successDelete && (
        <MessageBox variant="success">Usuario eliminado satisfactoriamente</MessageBox>
      )}
            {loadingCreate && <LoadingBox></LoadingBox>}
      {errorCreate && <MessageBox variant="danger">{errorCreate}</MessageBox>}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th  className="table-hidden">ID</th>
              <th  >NOMBRE</th>
              <th  className="table-hidden">EMAIL</th>
              <th  className="table-hidden">ES ADMIN</th>
              <th  >ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
                users.filter((user)=>{
                  if (searchTerm === ""){
                    return user
                  }else if  (user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                  }else if  (user._id.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user
                  }else if  (user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return user

                  }            
            
                }).map((user) => (
              <tr key={user._id}>
                <td className="table-hidden">{user._id}</td>
                <td >{user.name}</td>
                <td className="table-hidden">{user.email}</td>
                <td className="table-hidden">{user.isAdmin ? 'YES' : 'NO'}</td>
                <td>
                  <IconButton
                    type="button"
                    className="small"
                    onClick={() => props.history.push(`/user/${user._id}/edit`)}
                  >
                    <EditIcon />

                  </IconButton>
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
