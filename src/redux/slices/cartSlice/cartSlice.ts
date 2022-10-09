import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartType = {
  id: number
  title: string
  price: number
  image: string
  count: number
}

interface CartInitialState {
  payload: number
  totalPrice: number
  subjects: CartType[]
}

const initialState: CartInitialState = {
  payload: 0,
  subjects: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state: CartInitialState, action: PayloadAction<CartType>) {
        const findItem = state.subjects.find((obj) => obj.id === action.payload.id)
  
        if(findItem) {
          findItem.count += 1;
        } else {
          state.subjects.push({
            ...action.payload,
            count: 1,
          });
        }
  
        state.totalPrice = state.subjects.reduce((sum, obj) => {
          return (obj.price * obj.count) + sum
        }, 0)
    },
    minusItem(state: CartInitialState, action: PayloadAction<CartType>) {
        const findItem = state.subjects.find((obj) => obj.id === action.payload.id)
  
        if(findItem) {
          findItem.count -= 1;
        } else {
          state.subjects.push({
            ...action.payload,
            count: 1,
          });
        }
  
        state.totalPrice = state.subjects.reduce((sum, obj) => {
          return (obj.price * obj.count) - sum
        }, 0)
      },
    removeItem (state: CartInitialState, action: PayloadAction<number>) {
        state.subjects = state.subjects.filter((obj) => obj.id !== action.payload)
        
        state.totalPrice = state.subjects.reduce((sum, obj) => {
          return (obj.price * obj.count) - sum
        }, 0)
    },
  },
})

export const { addItem, minusItem, removeItem } = cartSlice.actions

export default cartSlice.reducer