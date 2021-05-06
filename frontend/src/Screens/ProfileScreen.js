
import React, { useEffect, useState } from 'react';
import './ProfileScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile} from '../actions/userActions';
import loadingPage from '../component/LoadingPage';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
// import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [nit, setNit] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      // dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setNit(user.nit);
      setEmail(user.email);
    
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          nit,
          email,
          password,
        })
      );
    }
  };


  return (
    <div className="profile-container">
      <form className="formulario" onSubmit={submitHandler}>
        <div className="contenedor">
          <h1>Perfil de usuario</h1>
        </div>
        {loading ? (
        <div className="loading-div">
          <LoadingBox/>
        </div>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
             
             {loadingUpdate && <LoadingBox></LoadingBox>}
              {errorUpdate && (
                <MessageBox variant="danger">{errorUpdate}</MessageBox>
              )}
              {successUpdate && (
                <MessageBox variant="success">
                  Perfil actualizado correctamente
                </MessageBox>
              )}
         
            <div className="input-contenedor">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder=" Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="email">Nit</label>
              <input
                id="nit"
                type="nit"
                placeholder="Nit"
                value={nit}
                onChange={(e) => setNit(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="input-contenedor">
              <label htmlFor="confirmPassword">confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirme Contraseña"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
     
            <div>
              <label />
              <button className="button block" type="submit">
                Actualizar
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}