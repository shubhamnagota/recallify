import React from "react";
import WordList from "../WordComponent/WordList";
import WordListFilters from "../WordComponent/WordListFilters";
import { Container } from "reactstrap";

export default function DashboardPage() {
  return (
    <Container>
      <WordListFilters />
      <WordList />
    </Container>
  );
}
