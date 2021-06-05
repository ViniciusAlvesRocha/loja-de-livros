import './App.css';
import books from './products';
import BookList from './components/BookList'
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store/index';
function App() {
  return (
    <div className="App">
      <Provider store={ store }>
        <BookList books={books}/>
        <Cart />
      </Provider>
    </div>
  );
}

export default App;
