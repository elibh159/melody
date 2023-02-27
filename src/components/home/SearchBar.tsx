import React from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import { SearchBarPropsType } from '../../interface/songType';

const SearchBar = ({ search, setSearch }: SearchBarPropsType) => {
  return (
    <Row className="justify-content-center m-3">
      <Col lg={6} md={6}>
        <h3>Search</h3>
        <div className="input-group">
          <input
            name="search"
            value={search}
            type="text"
            placeholder="Search"
            autoComplete="search"
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </div>
      </Col>
    </Row>)
}

export default React.memo(SearchBar);