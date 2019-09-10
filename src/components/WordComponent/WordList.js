import React from "react";
import { connect } from "react-redux";
import WordListItem from "./WordListItem";
import selectWords from "../../selectors/words";
import { ListGroup, Row, Button, Col } from "reactstrap";
import { Link } from "react-router-dom";

const WordList = props => {
  return (
    <React.Fragment>
      <Row>
        <Col>
          <h2>Words List</h2>
        </Col>
        <Col>
          <Button color="primary" outline>
            <Link to="/addWord">Add New Word</Link>
          </Button>
        </Col>
      </Row>
      <ListGroup>
        {props.words.map(word => (
          <WordListItem key={word.id} {...word} />
        ))}
      </ListGroup>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  words: selectWords(state.words, state.filters)
});

export default connect(mapStateToProps)(WordList);
