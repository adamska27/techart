import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Radar } from 'react-chartjs-2';
import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';

import media from '../../styles/media';
import { theme } from '../../styles/theme';

const ButtonContainer = styled.div`
  margin: 12px auto;
  padding: 24px;
  width: 150px;
`;

const ButtonStyled = styled(Button)`
  padding: 12px 6px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;

  ${media.phone`
    margin: 0 auto;
  `};
`;

const RadarContainer = styled.div`
  height: 500px;
  width: 100%;

  ${media.phone`
    height: 200px;
  `};
`;

export default class RadarChart extends React.PureComponent {
  static propTypes = {
    collection: PropTypes.bool,
    fetchUserRatings: PropTypes.func,
    fetchRatingsAverage: PropTypes.func,
    jwt: PropTypes.string,
    ratingsAverage: PropTypes.array,
    userRatings: PropTypes.array.isRequired
  };

  componentDidMount() {
    const {
      collection,
      jwt,
      fetchUserRatings,
      fetchRatingsAverage,
      match
    } = this.props;
    if (collection) return;
    const { gameId } = match ? match.params : null;
    if (jwt) {
      fetchUserRatings(jwt, gameId);
    }
    if (match) {
      fetchRatingsAverage(gameId);
    }
  }

  render() {
    const { collection, jwt, userRatings, ratingsAverage } = this.props;
    const legend = collection ? false : true;
    const data = {
      labels: [
        'story',
        'feeling',
        'level-design',
        'art-design',
        'originality',
        'sound-design',
        'textures',
        'framerate',
        'physic',
        'lighting'
      ],
      datasets: [
        {
          label: 'Général',
          backgroundColor: theme.color.sideColorTransparent,
          borderColor: theme.color.mainColorTransparent,
          pointBackgroundColor: theme.color.sideColor,
          pointBorderColor: theme.color.mainColorTransparent,
          pointHoverBackgroundColor: theme.color.sideColor,
          pointHoverBorderColor: theme.color.sideColor,
          data: ratingsAverage || null
        },
        {
          label: userRatings.length ? 'Mon ressenti' : 'test',
          backgroundColor: userRatings.length
            ? theme.color.mainColorTransparent
            : 'transparent',
          borderColor: userRatings.length
            ? theme.color.sideColorTransparent
            : 'transparent',
          pointBackgroundColor: userRatings.length
            ? theme.color.mainColor
            : 'transparent',
          pointBorderColor: userRatings.length
            ? theme.color.sideColorTransparent
            : 'transparent',
          pointHoverBackgroundColor: userRatings.length
            ? theme.color.sideColor
            : 'transparent',
          pointHoverBorderColor: userRatings.length
            ? theme.color.sideColor
            : 'transparent',
          data: userRatings || null
        },
        // default data set with min 0 and max 10 to set the graduation
        {
          label: 'default',
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'transparent',
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 10]
        }
      ]
    };
    return (
      <Container>
        {(userRatings && userRatings.length) ||
        (ratingsAverage && ratingsAverage.length) ? (
          <div>
            <RadarContainer>
              <Radar
                data={data}
                options={{
                  maintainAspectRatio: false,
                  legend: false,
                  gridLines: {
                    display: false
                  },
                  scale: {
                    gridLines: {
                      color: [
                        'white',
                        'white',
                        'white',
                        'white',
                        'white',
                        'white',
                        'white',
                        'white'
                      ]
                    },
                    pointLabels: {
                      fontSize: 12
                    },
                    ticks: {
                      suggestedMin: 0,
                      suggestedMax: 10,
                      display: false,
                      maxTicksLimit: 5
                    }
                  }
                }}
              />
            </RadarContainer>
          </div>
        ) : null}
        {!userRatings || (userRatings && !Object.keys(userRatings).length) ? (
          <Link
            to={!jwt ? '/login' : `/${this.props.match.params.gameId}/rating`}
          >
            <ButtonContainer>
              <ButtonStyled value="evaluate" />
            </ButtonContainer>
          </Link>
        ) : null}
      </Container>
    );
  }
}
