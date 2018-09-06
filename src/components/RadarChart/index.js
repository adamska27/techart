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
  margin: 100px auto;
  width: 80%;

  ${media.phone`
    margin: 0 auto;
  `};
`;

export default class RadarChart extends React.PureComponent {
  static propTypes = {
    fetchUserRatings: PropTypes.func.isRequired,
    fetchRatingsAverage: PropTypes.func.isRequired,
    jwt: PropTypes.string,
    ratingsAverage: PropTypes.array.isRequired,
    userRatings: PropTypes.array.isRequired
  };

  componentDidMount() {
    const { jwt, fetchUserRatings, fetchRatingsAverage, match } = this.props;
    const { gameId } = match.params;
    if (jwt) {
      fetchUserRatings(jwt, gameId);
    }
    fetchRatingsAverage(gameId);
  }

  render() {
    const { jwt, userRatings, ratingsAverage } = this.props;
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
          label: userRatings.length ? 'Mon ressenti' : '',
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
          label: '',
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
            <div style={{ width: '100%', height: '500px' }}>
              <Radar
                data={data}
                height={200}
                width={200}
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
            </div>
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
