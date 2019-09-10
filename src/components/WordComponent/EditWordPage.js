import React from "react";
import { connect } from "react-redux";
import WordForm from "./WordForm";
import { Button, Container } from "reactstrap";
import { startEditWord, startRemoveWord } from "../../actions/words";

const EditWordPage = props => {
  return (
    <Container>
      <WordForm
        formTitle="Edit word"
        word={props.word}
        onSubmit={word => {
          props.dispatch(startEditWord(props.word.id, word));
          props.history.push("/dashboard");
        }}
      />
      <Button
        color="danger"
        onClick={() => {
          props.dispatch(startRemoveWord({ id: props.word.id }));
          props.history.push("/dashboard");
        }}
      >
        Remove
      </Button>
    </Container>
  );
};

const mapStateToProps = (state, props) => ({
  word: state.words.find(({ id }) => id === props.match.params.id)
});

export default connect(mapStateToProps)(EditWordPage);
