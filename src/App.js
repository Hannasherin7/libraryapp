import logo from './logo.svg';
import './App.css';
import { AddBook } from './components/AddBook';
import { SearchBook } from './components/SearchBook';
import { DeleteBook } from './components/DeleteBook';
import { ViewAll } from './components/ViewAll';

function App() {
  return (
    <div >
     <AddBook></AddBook><br></br>
     <SearchBook></SearchBook><br></br>
     <DeleteBook></DeleteBook><br></br>
     <ViewAll></ViewAll>
    </div>
  );
}

export default App;
