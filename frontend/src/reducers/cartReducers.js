import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload
            const itemExists = state.cartItems.find(cartItem => cartItem.product === item.product)

            if(itemExists){
                return {
                    ...state,
                    cartItems: state.cartItems.map(cartItem => cartItem.product === itemExists.product ? item : cartItem)
                }
            } else {
                return {
                    ...state, 
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.product !== action.payload)
            }
        default:
            return state
    }
}