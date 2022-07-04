import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartProducts: [],
    totalPrice: 0,
};
export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddToCart: (state, action) => {
           
            const itemIndex = state.cartProducts.findIndex(
                (item) => item._id === action.payload._id
            );
            if (itemIndex >= 0) {
                state.cartProducts[itemIndex].quantity += 1;
            } else {
                const temp = { ...action.payload, quantity: 1 };
                state.cartProducts.push(temp);
            }
        },
        DeleteProduct: (state, action) => {
            const itemIndex = state.cartProducts.findIndex((item) => item.id === action.payload.id);
            state.cartProducts.splice(itemIndex, 1);
        },
        Calculate: (state, action) => {
            state.totalPrice = 0;
            const array = action.payload;
            array.forEach((element) => {
                state.totalPrice += element.sellingPrice * element.quantity;
            });
        },
        Increment: (state, action) => {
            const itemIndex = state.cartProducts.findIndex(
                (item) => item._id === action.payload._id
            );
            if (itemIndex >= 0) {
                state.cartProducts[itemIndex].quantity += 1;
            }
        },
        Decrement: (state, action) => {
            const itemIndex = state.cartProducts.findIndex(
                (item) => item._id === action.payload._id
            );
            if (itemIndex >= 0) {
                if (state.cartProducts[itemIndex].quantity > 1) {
                    state.cartProducts[itemIndex].quantity -= 1;
                }
            }
        },
        SetCart: (state, action) => {
            const newData = state.cartProducts.map((element, index) => {
                return {
                    ...element,
                    ...action.payload[index],
                };
            });
            
            state.cartProducts=newData
        },
        EmptyCart: (state, action) => {
            state.cartProducts = [];
            state.totalPrice = 0;
        },
    },
});

export const { AddToCart, Calculate, Increment, Decrement, DeleteProduct, SetCart,EmptyCart } =
    CartSlice.actions;

export default CartSlice.reducer;
