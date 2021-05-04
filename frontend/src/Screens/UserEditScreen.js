import React from 'react';
import './UserEditScreen.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUser } from '../actions/userActions';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { USER_UPDATE_RESET } from '../constants/userConstants';

export default function UserEditScreen(props) {
  const userId = props.match.params.id;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nit, setNit] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      props.history.push('/listaUsuarios');
    }
    if (!user) {
      dispatch(detailsUser(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setNit(user.nit);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, props.history, successUpdate, user, userId]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update user
    dispatch(updateUser({ _id: userId, name, email, nit, isAdmin }));
  };
  return (
    <div className="userListContainer">
      <form className="formulario" onSubmit={submitHandler}>
        <div>
          <h1 className="titulelist">Edita Usuario {name}</h1>
          {loadingUpdate && <loadingPage></loadingPage>}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
        </div>
        {loading ? (
          <loadingPage />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div className="input-contenedor ">
              <label htmlFor="name">Nombre:</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="nit">Nit:</label>
              <input
                id="nit"
                type="text"
                placeholder="Nit"
                value={nit}
                onChange={(e) => setNit(e.target.value)}
              ></input>
            </div>
            <div >
              <label htmlFor="isAdmin">Es Admin</label>
              <input
                id="isAdmin"
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
            </div>
            <div >
              <button type="submit" className="button">
                Actualizar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
