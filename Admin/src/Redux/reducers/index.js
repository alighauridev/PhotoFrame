import { combineReducers } from "redux";
import {
  allProductsReducer,
  productCreateReducer,
  productCreateReviewReducer,
  productDeleteReducer,
  productEditReducer,
  singleProductReducer,
} from "./productReducers";
import { userListReducer, userLoginReducer } from "./userReducers";
import { getOrdersReducer, orderDeliverReducer, orderDetailsReducer } from "./orderReducers";
const RootReducer = combineReducers({
  UserLogin: userLoginReducer,
  UserList: userListReducer,
  Products: allProductsReducer,
  ProductDelete: productDeleteReducer,
  ProductCreate: productCreateReducer,
  ProductUpdate: productEditReducer,
  ProductDetails: singleProductReducer,
  Orders: getOrdersReducer,
  OrderDetails: orderDetailsReducer,
  OrderDeliver: orderDeliverReducer,
});

export default RootReducer;
