import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar
        className="navbar navbar-expand-sm bg-dark navbar-dark"
        expand="sm"
      >
        <NavbarBrand
          tag={() => (
            <Link
              style={{
                color: "#FFF"
              }}
              to="/dashboard"
            >
              <h2>recallify</h2>
            </Link>
          )}
        />
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <i className="fas fa-user" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Settings (Coming Soon)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.props.dispatch(startLogout)}>
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default connect()(Header);
