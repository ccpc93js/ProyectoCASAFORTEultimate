import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';
import './OrderHistoryScreen.css'
import DetailsIcon from '@material-ui/icons/Details';
import { IconButton } from '@material-ui/core';


export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div className="orderHContainer">
      <h1>Historial pedididos</h1>
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
              <th >ID</th>
              <th className="table-hidden">FECHA</th>
              <th >TOTAL</th>
              <th className="table-hidden">PAGADO</th>
              <th className="table-hidden">ENTREGADO</th>
              <th >ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td >{order._id}</td>
                <td className="table-hidden">{order.createdAt.substring(0, 10)}</td>
                <td >{order.totalPrice.toFixed(2)}</td>
                <td className="table-hidden">{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</td>
                <td className="table-hidden">
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                <IconButton
                    type="button"
                    className="small"
                    onClick={() => {
                      props.history.push(`/order/${order._id}`);
                    }}
                  >
                    <DetailsIcon/>
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