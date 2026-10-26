import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count : 0
}

const counterSlice = createSlice({
    //필수 속성 : name, initialState, reducers
    name: "counter",
    initialState,
    reducers:{
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count -1
        },
        //입력값만큼 증가
        incrementByAmount:(state, action) => {
            state.count += action.payload
        }
    }
})

export const {increment: increment} = counterSlice.actions;
export const {decrement: decrement} = counterSlice.actions;
export const {incrementByAmount: incrementByAmount} = counterSlice.actions;
export default counterSlice.reducer