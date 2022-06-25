import SearchBox from './components/SearchBox';
import TableBox from './components/TableBox';
import { useState } from 'react';
import './App.css';

function App() {

  //checkbox State & Func
  const [checkStatus, setcheckStatus] = useState(false)
  let checkHandler = () => {
    checkStatus ? setcheckStatus(false) : setcheckStatus(true)
  }

  //search State & Func
  const [searchText, setsearchText] = useState("")
  let searchHandler = (x) => {
    setsearchText(x)
  }

  return (
    <div className="App">
      <div className="card">
        <SearchBox

          cbLabel="Only show products in Stock"

          searchHandler={searchHandler}
          searchText={searchText}

          checkHandler={checkHandler}
          checkStatus={checkStatus}

        />
        <TableBox

          searchText={searchText}
          checkStatus={checkStatus}

        />
      </div>
    </div>
  );
}

export default App;
