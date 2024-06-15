import React, { Component } from "react";
import * as Icon from "react-bootstrap-icons";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartSummary extends Component {
  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName + " deleted successfully", 1.5);
  }

  renderEmpty() {
    return (
      <div>
        <NavItem>
          <NavLink>Empty</NavLink>
        </NavItem>
      </div>
    );
  }

  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu end>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.product.id}>
                <Badge
                  onClick={() => this.removeFromCart(cartItem.product)}
                  color="danger"
                >
                  <Icon.Trash size={15}></Icon.Trash>
                </Badge>{" "}
                {cartItem.product.productName}{" "}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem>
              <Link to="/cart">Go To Cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  render() {
    return this.props.cart.length > 0
      ? this.renderSummary()
      : this.renderEmpty();
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
