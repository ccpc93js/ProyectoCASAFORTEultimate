import React, { useEffect, useState } from 'react';
import './OrderListScreen.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, listOrders } from '../actions/orderActions';
import LoadingBox from '../component/LoadingBox';
import loadingPage from '../component/LoadingPage';
import MessageBox from '../component/MessageBox';
import { ORDER_DELETE_RESET } from '../constants/orderConstants';
import { IconButton } from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DetailsIcon from '@material-ui/icons/Details';

export default function OrderListScreen(props) {
  const[searchTerm, setSearchTerm] = useState("");



  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;
  const orderDelete = useSelector((state) => state.orderDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = orderDelete;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: ORDER_DELETE_RESET });
    dispatch(listOrders({user:userInfo._id }));
  }, [dispatch, successDelete,userInfo._id ]);
  const deleteHandler = (order) => {
    if (window.confirm('¿estas seguro de eliminarlo?')) {
      dispatch(deleteOrder(order._id));
    }
  };
  return (
    <div className="orderListContainer" style={{overflowX: "scroll"}}>
      <div className="row">
        <h1 className="titulelist">Pedidos</h1>
        <input 
        className="inputSearchPL"
         type="text"
         placeholder="Buscar pedido..." 
         onChange={(e) =>{setSearchTerm(e.target.value)}}
         />

      </div>
      {loadingDelete && <LoadingBox></LoadingBox>}
      {errorDelete && <MessageBox variant="danger">{errorDelete}</MessageBox>}
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
              <th className="table-hidden">ID</th>
              <th>USUARIO</th>
              <th className="table-hidden">FECHA</th>
              <th className="table-hidden">TOTAL</th>
              <th className="table-hidden">PAGADO</th>
              <th className="table-hidden">ENTREGADO</th>
              <th >ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {
             orders.filter((order)=>{
              if (searchTerm === ""){
                return order
              }else if  (order._id.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return order
              }else if  (order.user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return order
              }else if  (order.createdAt.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
                return order
              }
             }).map((order) => (
              <tr key={order._id}>
                <td className="table-hidden">{order._id}</td>
                <td>{order.user.name}</td>
                <td className="table-hidden">{order.createdAt.substring(0, 10)}</td>
                <td className="table-hidden">{order.totalPrice.toFixed(2)}</td>
                <td className="table-hidden">{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td  className="table-hidden">
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <IconButton
                    aria-label="detalle"
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    <DetailsIcon/>
                  </IconButton>
                  <IconButton
                    aria-label="eliminar"
                    type="button"
                    className="small"
                    onClick={() => deleteHandler(order)}
                  >
                    <DeleteForeverIcon className="button-remove"/>

                  </IconButton>
                </td>
              </tr>
            )).sort((a,b)=> a.createdAt < b.createdAt? 1:-1)}
          </tbody>
        </table>
      )}
    </div>
  );
}
