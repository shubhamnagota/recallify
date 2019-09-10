import React from "react";
import { connect } from "react-redux";
import {
  setTitleFilter,
  setCategoryFilter,
  sortByDate,
  sortByCategory
} from "../../actions/filters";
import { Col, Row } from "reactstrap";

const WordListFilters = ({ filters, dispatch }) => {
  return (
    <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Col xs="6" md="4" sm="4">
        Title Filter :{" "}
        <input
          type="text"
          value={filters.titleText}
          onChange={e => {
            dispatch(setTitleFilter(e.target.value));
          }}
        />
      </Col>
      <Col xs="6" md="4" sm="4">
        Category Filter :{" "}
        <input
          type="text"
          value={filters.categoryName}
          onChange={e => {
            dispatch(setCategoryFilter(e.target.value));
          }}
        />
      </Col>
      <Col md="4" sm="4">
        Sort By:{" "}
        <select
          value={filters.sortBy}
          onChange={e => {
            if (e.target.value === "date") dispatch(sortByDate());
            else if (e.target.value === "category") dispatch(sortByCategory());
          }}
        >
          <option value="date">Date</option>
          <option value="category">Category</option>
        </select>
      </Col>
    </Row>
  );
};

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(WordListFilters);
