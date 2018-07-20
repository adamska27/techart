import Slider from 'rc-slider';
import styled from 'styled-components';
import React from 'react';
import { Redirect } from 'react-router';

import Button from '../../common/Button';
import Title from '../../common/TitleSection';

import 'rc-slider/assets/index.css';

const ButtonContainer = styled.div`
  margin: 0 auto;
  padding: 24px;
  width: 150px;
`;

const ContainerArt = styled.div`
  display: flex;
  height: 350px;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
`;

const ContainerTech = ContainerArt.extend`
  flex-direction: column;
  width: 50%;
`;

const SliderContainer = styled.div`
  float: left;
  width: 160;
  height: 400;
  margin-bottom: 160;
  margin-left: 50;
`;

const marks = {
  1: 'mauvais',
  3: 'bof',
  5: 'moyen',
  7: 'bon',
  9: 'très bon',
  10: 'excellent'
};

const marks2 = {
  1: '1',
  3: '3',
  5: '5',
  7: '7',
  9: '9',
  10: '10'
};

export default class Ratings extends React.PureComponent {
  state = {
    story: 5,
    feeling: 5,
    levelDesign: 5,
    artDesign: 5,
    originality: 5,
    soundDesign: 5,
    textures: 5,
    framerate: 5,
    physics: 5,
    lighting: 5,
    redirect: false
  };

  onChange = (value, name) => {
    this.setState({
      [name]: value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const data = this.state;
    const { jwt, productId } = this.props;
    await this.props.fetchSubmitRatings(jwt, productId, data);
    this.setState({ redirect: true });
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <form onSubmit={this.onSubmit}>
          <Title value="Art" />
          <ContainerArt>
            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'story')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'feeling')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'levelDesign')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'artDesign')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'originality')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                vertical
                min={1}
                max={10}
                marks={marks}
                step={1}
                onChange={value => this.onChange(value, 'soundDesign')}
                defaultValue={5}
              />
            </SliderContainer>
          </ContainerArt>

          <Title value="Tech" />
          <ContainerTech>
            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'textures')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'framerate')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'physics')}
                defaultValue={5}
              />
            </SliderContainer>

            <SliderContainer>
              <Slider
                min={1}
                max={10}
                marks={marks2}
                step={1}
                onChange={value => this.onChange(value, 'lighting')}
                defaultValue={5}
              />
            </SliderContainer>
          </ContainerTech>
          <ButtonContainer>
            <Button type="submit" value="Valider" />
          </ButtonContainer>
        </form>
      </React.Fragment>
    );
  }
}