import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { startLogin } from "../../actions/auth";
import { Navbar, NavbarBrand, Jumbotron, Button, Container } from "reactstrap";

const LoginPage = props => {
  return (
    <div>
      <Navbar className="navbar navbar-expand-sm bg-dark navbar-dark">
        <NavbarBrand
          tag={() => (
            <Link
              style={{
                color: "#FFF"
              }}
              to="/"
            >
              <h2>recallify</h2>
            </Link>
          )}
        />
      </Navbar>

      <Container>
        <Jumbotron>
          <h1 className="display-3">Hello, folks!</h1>
          <p className="lead">
            Recallify is a simple application, which lets you remember the words
            you have learnt earlier. <br />
            Also you can filter out the words and sort the words too.
          </p>
          <hr className="my-2" />
          <p>So why to wait, just login and store your knowledge.</p>
          <p className="lead">
            <Button color="primary" onClick={props.dispatch(startLogin)}>
              SignIn With Google
            </Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default connect()(LoginPage);
