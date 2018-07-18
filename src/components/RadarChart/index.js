import { Link } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import { theme } from '../../styles/theme';

const ButtonContainer = styled.div`
  margin: 12px auto;
  padding: 24px;
  width: 150px;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export default class RadarExample extends React.PureComponent {
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
        'histoire',
        'feeling',
        'level-design',
        'art-design',
        'originalité',
        'sound-design',
        'textures',
        'framerate',
        'physique',
        'éclairage'
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
                  options={{ maintainAspectRatio: false }}
                />
              </div>
            </div>
          ) : null}
        {!userRatings || (userRatings && !Object.keys(userRatings).length) ? (
          <Link
            to={!jwt ? '/login' : `/${this.props.match.params.gameId}/rating`}
          >
            <ButtonContainer>
              <Button value="évaluer" />
            </ButtonContainer>
          </Link>
        ) : null}
      </Container>
    );
  }
}
