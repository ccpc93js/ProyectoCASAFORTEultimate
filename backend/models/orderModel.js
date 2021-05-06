
import mongoose from 'mongoose';
import shortid from 'shortid'


const orderSchema = new mongoose.Schema(
  {
    _id:{type: String, default: shortid.generate},
    orderItems: [
      {
        info: { type: String, required: true },
        qty: { type: Number, required: true },
        imagen: { type: String, required: true },
        precio: { type: Number, required: true },
        // producto: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: 'Producto',
        //   required: true,
        // }, 
        // activar cuando haga el backend de los productos
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
      lat: Number,
      lng: Number,
    },
    paymentMethod: { type: String, required: true },
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    totalinDolars:{ type: Number},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    // seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('orders', orderSchema);
export default Order;