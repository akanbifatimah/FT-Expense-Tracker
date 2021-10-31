import React, {createContext,useReducer} from 'react'
import AppReducer from './AppReducer'
const initialState = {
    Transactions : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          
        ]
}
//create context
export const GlobalContext = createContext(initialState)
 export const GlobalProvider = ({children}) =>{
     const [state, dispatch] = useReducer(AppReducer, initialState)
     //Actions
     function deleteTransaction(id){
         dispatch({type:'DELETE_TRANSACTION',
                    payload:id
        });
     }
     function addTransaction(transaction){
        dispatch({type:'ADD_TRANSACTION',
                   payload:transaction
       });
    }
     return (<GlobalContext.Provider value={{
         Transactions:state.Transactions,
         deleteTransaction,addTransaction}}>
         {children}
     </GlobalContext.Provider>)
 }