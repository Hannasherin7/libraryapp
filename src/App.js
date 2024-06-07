import logo from './logo.svg';
import './App.css';
import { AddBook } from './components/AddBook';
import { SearchBook } from './components/SearchBook';

function App() {
  return (
    <div >
     <AddBook></AddBook><br></br>
     <SearchBook></SearchBook>
    </div>
  );
}

export default App;
