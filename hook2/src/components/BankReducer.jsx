import { useReducer, useState } from "react"

const initialState = {balance : 0};

const reducer = (state, action) => {
    console.log(state, action);
    
    //예금 : DEPOSIT, 출금 : WITHDRAW, action.payload AMOUNT(액수)
    switch(action.type){
        case "DEPOSIT":
            return{...state, balance: state.balance + action.payload}
        case "WITHDRAW":
            if(state.balance < action.payload){
                alert("잔액이 부족합니다.")
                return state;
            }
            return{...state, balance: state.balance - action.payload}
        default:
            return state;
    }

}

const BankReducer = () => {
    const[state,dispatch] = useReducer(reducer, initialState);
    const [amount,setAmount] = useState(0); //금액

    return(
        <div>
            <h2>입금 출금</h2>
            <h3>현재 잔액: {state.balance}</h3>
            <input 
                type="text"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                step={1000}
                 />
            <button onClick={()=> {
                dispatch({type: "DEPOSIT",payload: amount})
            }}>예금</button>
            <button onClick={()=> {
                dispatch({type: "WITHDRAW",payload: amount})
            }}>출금</button>
        </div>
    )
}

export default BankReducer