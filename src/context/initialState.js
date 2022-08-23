import { fetchCart , fetchUser } from "../util/fetchLocalStorageData";
const cartLength = fetchCart();
export const initialState = {
    user:fetchUser(),
    foodItems:null,
    cartShow:null,
    cartItems:cartLength,
};