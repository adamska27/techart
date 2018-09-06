import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../common/Button';
import media from '../../styles/media';

const ButtonStyled = styled(Button)`
  border-radius: 0;
`;

const Container = styled.div`
  display: flex;
  height: 25px;
  justify-content: flex-end;

  ${media.tablet`
    justify-content: center;
  `};
`;

const ButtonContainer = styled.div`
  margin-left: 6px;
  width: 100px;
`;

const FormStyled = styled.form`
  width: 100%;
`;

const InputStyled = styled.input`
  width: 50%;
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
      <FormStyled onSubmit={e => this.onSearch(e, keyword)}>
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
            <ButtonStyled type="submit" value="Search" />
          </ButtonContainer>
          {redirect && <Redirect to={`/${keyword}`} />}
        </Container>
      </FormStyled>
    );
  }
}
