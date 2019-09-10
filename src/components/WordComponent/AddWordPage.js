import React from "react";
import { connect } from "react-redux";
import WordForm from "./WordForm";
import { startAddWord } from "../../actions/words";
import { Container } from "reactstrap";

const AddWordPage = props => {
  return (
    <Container>
      <WordForm
        formTitle="Add new word"
        onSubmit={word => {
          props.dispatch(startAddWord(word));
          props.history.push("/dashboard");
        }}
      />
    </Container>
  );
};

export default connect()(AddWordPage);
