import React from 'react';
import PropTypes from 'prop-types';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';

import { theme } from '../../styles/theme';

const Container = styled.div`
  margin: 0 auto;
  width: 80%;
`;

export default class GamerProfile extends React.PureComponent {
  static propTypes = {
    userGamerProfile: PropTypes.array,
    userGamerProfile2: PropTypes.array,
    myGamerProfile: PropTypes.object
  };

  render() {
    const {
      myGamerProfile,
      player1,
      player2,
      userGamerProfile,
      userGamerProfile2
    } = this.props;
    const data = {
      labels: [
        'adventure',
        'action',
        'horror',
        'sport',
        'auto',
        'shooter',
        'str',
        'platform',
        'versus',
        'rpg'
      ],
      datasets: [
        {
          label: player1,
          backgroundColor: theme.color.player1Transparent,
          borderColor: theme.color.player1Transparent,
          pointBackgroundColor: theme.color.player1,
          pointBorderColor: theme.color.player1Transparent,
          pointHoverBackgroundColor: theme.color.player1,
          pointHoverBorderColor: theme.color.player1,
          data: userGamerProfile || null
        },
        {
          label: player2 ? player2 : '',
          backgroundColor: player2
            ? theme.color.player2Transparent
            : 'transparent',
          borderColor: player2 ? theme.color.player2Transparent : 'transparent',
          pointBackgroundColor: player2 ? theme.color.player2 : 'transparent',
          pointBorderColor: player2
            ? theme.color.player2Transparent
            : 'transparent',
          pointHoverBackgroundColor: player2
            ? theme.color.player2
            : 'transparent',
          pointHoverBorderColor: player2 ? theme.color.player2 : 'transparent',
          data: userGamerProfile2 || null
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
        {userGamerProfile && userGamerProfile.length ? (
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
      </Container>
    );
  }
}
