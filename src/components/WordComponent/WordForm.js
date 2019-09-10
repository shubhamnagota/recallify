import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";

export class WordForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.word ? props.word.title : "",
      definition: props.word ? props.word.definition : "",
      category: props.word ? props.word.category : "",
      note: props.word ? props.word.note : "",
      createdAt: props.word ? moment(props.word.createdAt) : moment(),
      calendarFocused: false,
      error: "",
      formTitle: props.formTitle || "Add new word"
    };
  }

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onDateChange = createdAt => {
    this.setState({ createdAt });
  };

  onFocusChange = ({ focused }) => {
    this.setState({ calendarFocused: focused });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.definition || !this.state.category) {
      this.setState({ error: "Please provide title, definition and category" });
    } else {
      this.setState({ error: "" });
      this.props.onSubmit({
        title: this.state.title,
        definition: this.state.definition,
        category: this.state.category,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.state.formTitle && <h2>{this.state.formTitle}</h2>}
        {this.state.error && (
          <p className={"text-danger"}>{this.state.error}</p>
        )}
        <Form onSubmit={this.onSubmit}>
          <FormGroup row>
            <Label for="title" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={this.state.title}
                required
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="definition" sm={2}>
              Definition
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="definition"
                id="definition"
                placeholder="Definition"
                value={this.state.definition}
                required
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="category" sm={2}>
              Category
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="category"
                id="category"
                value={this.state.category}
                placeholder="Category"
                required
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="note" sm={2}>
              Notes
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                name="note"
                id="note"
                value={this.state.note}
                placeholder="Notes (Optional)"
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            <Button
              style={{ marginLeft: "5px" }}
              color={
                this.state.formTitle === "Add new word" ? "success" : "warning"
              }
            >
              {this.state.formTitle === "Add new word" ? "Save" : "Update"}
            </Button>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default WordForm;
