import React from 'react';
import RichTextEditor from 'react-rte';
import styled from 'styled-components';

import Title from '../common/TitleSection';

const Container = styled.div`
  padding: 24px 12px;
`;

export default class ReviewEditor extends React.PureComponent {
  state = {
    value: RichTextEditor.createEmptyValue()
  };

  onChange = value => {
    this.setState({ value });
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
      this.props.onChange(value.toString('html'));
    }
  };

  render() {
    return (
      <React.Fragment>
        <Title value="Write your review" />
        <Container>
          <RichTextEditor value={this.state.value} onChange={this.onChange} />
        </Container>
      </React.Fragment>
    );
  }
}
