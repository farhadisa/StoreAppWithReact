import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs";

class CartDetail extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " deleted successfully", 1.5);
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? (
          this.getCartItems()
        ) : (
          <div
            style={{
              //Bunlari hamisin ozum elemisem cart bos olanda yazmaq ve s
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "75vh",
            }}
          >
            <h3>Your Cart is Empty</h3>
          </div>
        )}
      </div>
    );
  }

  getCartItems() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  style={{ "min-width": "100%", width: "100%" }}
                  onClick={() => this.removeFromCart(cartItem.product)}
                  color="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
