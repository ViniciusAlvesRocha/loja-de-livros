import React, { Component } from 'react';
import addItemToCart from '../actions'
import { connect } from 'react-redux';

class BookList extends Component {

  render() {
    const { books } = this.props;
    return (
      <>
      <h1>Lista de Livros</h1>
       {books.map((book) => (
        <div key={book.name}>
          {book.name} - {book.price} <button onClick={() => addItemToCart(book)}>Adicionar</button>
        </div>
      ))}
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (book) => dispatch(addItemToCart(book))
});
export default connect(null, mapDispatchToProps)(BookList);