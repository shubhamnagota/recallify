import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

const WordListItem = ({ id, title, definition, category, createdAt, note }) => {
  return (
    <ListGroupItem>
      <ListGroupItemHeading>
        <Link to={`editWord/${id}`}>
          <h3>{title}</h3>
        </Link>
      </ListGroupItemHeading>
      <ListGroupItemText>
        <b>Created</b> : {moment(createdAt).format("MMMM Do, YYYY")}
      </ListGroupItemText>
      <ListGroupItemText>
        <b>Category</b> : {category}
      </ListGroupItemText>
      <ListGroupItemText>
        <b>Definition</b> : {definition}
      </ListGroupItemText>
      <ListGroupItemText>{note}</ListGroupItemText>
    </ListGroupItem>
  );
};

export default WordListItem;
