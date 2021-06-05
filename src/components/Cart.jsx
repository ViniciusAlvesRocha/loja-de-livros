import React from 'react';
import { connect } from 'react-redux';

class Cart extends React.Component {
  render() {
    const { cartItems } = this.props;
    console.log(cartItems);
    return(
      <>
        <h1>Carrinho</h1>
        {
          cartItems.map((item) => (
            <div key={item.name}>{ item.name } - { item.price }</div>
          ))
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Cart);