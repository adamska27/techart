import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';

const Container = styled.div`
  display: flex;
  height: 25px;
  width: 150px;
`;

const ButtonContainer = styled.div`
  margin-left: 6px;
  width: 100px;
`;

const InputStyled = styled.input`
  background-color: lightgrey;
  border-radius: 3px;
  height: 25px;
`;

export default class SearchBar extends React.PureComponent {
  static propTypes = {
    fetchSearch: PropTypes.func.isRequired
  };

  state = {
    keyword: '',
    redirect: false
  };

  onChange = e => {
    this.setState({ keyword: e.target.value });
  };

  onSearch = async (e, keyword) => {
    e.preventDefault();
    const { fetchSearch } = this.props;
    fetchSearch(keyword);
    this.setState({ redirect: true });
  };

  render() {
    const { keyword, redirect } = this.state;

    return (
      <form onSubmit={e => this.onSearch(e, keyword)}>
        <Container>
          <InputStyled
            minLength="1"
            name="search"
            onChange={this.onChange}
            required
            type="search"
            value={keyword}
          />
          <ButtonContainer>
            <Button type="submit" value="Chercher" />
          </ButtonContainer>
          {redirect && <Redirect to={`/search/${keyword}`} />}
        </Container>
      </form>
    );
  }
}
