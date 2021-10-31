import { GlobalContext } from "../../ContestApi/GlobalState";
import { useContext } from "react";
import Transaction from '../Transaction/index'
const TransactionList = () => {
  const {Transactions}= useContext(GlobalContext)
  
    return (<> 
        <h3>History</h3>
      <ul className="list">
        {Transactions.map(transaction =>(<Transaction key={Transactions.id} transaction={transaction}/>))}
         
      </ul>
    </>  );
}
 
export default TransactionList;