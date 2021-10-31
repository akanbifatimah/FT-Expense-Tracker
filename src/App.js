
import './App.css';
import Header from './Components/Header/index';
import Balance from './Components/Balance/index'
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import {GlobalProvider} from './ContestApi/GlobalState'

function App() {
  return (
    <GlobalProvider>
      
      <Header/> 
      <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
      </div> 
      

    </GlobalProvider>
  );
}

export default App;
