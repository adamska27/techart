import idx from 'idx';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import getBetterCover from '../../utils/getBetterCover';
import { gameType } from '../../PropTypes';

import Loader from '../common/Loader';
import media from '../../styles/media';
import Title from '../common/TitleSection';
import { Normal } from '../common/Text';
import YoutubePlayer from '../YoutubePlayer';

const Artwork = styled.img`
  height: 100%;
  width: 100%;
`;

const ArtworkContainer = styled.div`
  min-height: 250px;
  min-width: 450px;
`;

const Container = styled.div`
  margin: 48px auto;
  padding: 12px 24px;
`;

const ContainerInfos = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 6px;
  grid-template-areas:
    'Cover Info1 Info2'
    'Cover Summary Summary'
    'Cover Info3 Info4';

  ${media.tablet`
    grid-column-gap: 0;
    grid-template-areas:
      'Cover Cover .'
      'Info1 Info2 .'
      'Summary Summary .'
      'Info3 Info4 .'
      ;
    `};
`;

const ContainerScreenshots = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);
  display: flex;
  margin-top: 48px;
  overflow-x: scroll;
  width: 100%;
`;

const Cover = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

const CoverContainer = styled.div`
  align-items: center;
  display: flex;
  grid-area: Cover;
  justify-content: center;
`;

const HeaderImageContainer = styled.div`
  background: url(${props => (props.src ? props.src : null)}) no-repeat center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 720px;
  width: 100%;

  ${media.phone`
    height: 250px;
  `};
`;

const Info = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
  padding: 6px 0;
`;

const Info1 = styled(Info)`
  grid-area: Info1;
`;

const Info2 = styled(Info)`
  grid-area: Info2;
`;

const Info3 = styled(Info)`
  grid-area: Info3;
`;

const Info4 = styled(Info)`
  grid-area: Info4;
`;

const Infos = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled(Normal)`
  color: ${({ theme }) => theme.color.sideColor};
  margin-bottom: 6px;
`;

const Summary = styled.div`
  grid-area: Summary;
  line-height: 1.5em;
  padding: 12px;
  text-align: justify;
`;

export default class GameInfos extends React.PureComponent {
  static propTypes = {
    fetchGame: PropTypes.func,
    game: PropTypes.arrayOf(gameType).isRequired,
    match: PropTypes.object
  };

  static defaultProps = {
    fetchGame: () => null,
    game: []
  };

  componentDidMount() {
    this.props.fetchGame(this.props.match.params.gameId);
  }

  renderInfos = info => {
    return (
      <React.Fragment>
        {Array.isArray(info)
          ? info.map((i, index) => (
              <Normal key={`${i.name}_${index}`}>{i.name || 'N.C.'}</Normal>
            ))
          : info ? info : 'N.C.'}
      </React.Fragment>
    );
  };

  render() {
    const {
      game,
      isFetchingGameIgdb,
      isFetchingGame,
      isFetchingPostGame
    } = this.props;

    if (isFetchingGameIgdb || isFetchingGame || isFetchingPostGame) {
      return <Loader />;
    }

    // game infos
    const artworks = idx(game, _ => _[0].artworks);
    const screenshots = idx(game, _ => _[0].screenshots);
    let screenshotsLength = (screenshots && screenshots.length) || 0;
    // get a random number inferior at the sreenshots array length
    let screenshotsNumber = Math.floor(Math.random() * screenshotsLength);
    // use screenshotsNumber to get a random image among the screenshots available
    const headerImage = screenshotsLength
      ? getBetterCover(screenshots[screenshotsNumber].url, /thumb/, '720p')
      : null;

    const cover = idx(game[0], _ => _.cover.url);
    const betterCover = cover
      ? getBetterCover(cover, /thumb/, 'cover_big')
      : null;
    const developers = idx(game[0], _ => _.developers);
    // const extensions = idx(game[0], _ => _.extensions);
    // const franchises = idx(game[0], _ => _.franchises[0].name);
    // const gameModes = idx(game[0], _ => _.game_modes);
    const genres = idx(game[0], _ => _.genres);
    const platforms = idx(game[0], _ => _.platforms);
    const publishers = idx(game[0], _ => _.publishers);
    const releaseDates = idx(game[0], _ => _.release_dates[0].human);
    const summary = idx(game[0], _ => _.summary);
    const themes = idx(game[0], _ => _.themes);
    const videoId = idx(game, _ => _[0].videos[0].video_id);

    return (
      <React.Fragment>
        {game && game[0] ? (
          <React.Fragment>
            <div style={{ textAlign: 'center', textTransform: 'uppercase' }}>
              <HeaderImageContainer src={headerImage} />
              <Title value={game[0].name} />
              <Container>
                <ContainerInfos>
                  <CoverContainer>
                    <Cover src={`${betterCover}`} alt="cover" />
                  </CoverContainer>
                  <Info1>
                    <Infos>
                      <InfoTitle>Developers</InfoTitle>
                      <Normal>{this.renderInfos(developers)}</Normal>
                    </Infos>
                  </Info1>
                  <Info2>
                    <Infos>
                      <InfoTitle>Publishers</InfoTitle>
                      <Normal>{this.renderInfos(publishers)}</Normal>
                    </Infos>
                  </Info2>
                  <Summary>
                    <InfoTitle>Summary</InfoTitle>
                    <Normal>{summary}</Normal>
                  </Summary>
                  <Info3>
                    <Infos>
                      <InfoTitle>Platforms</InfoTitle>
                      <Normal>{this.renderInfos(platforms)}</Normal>
                    </Infos>
                    <Infos>
                      <InfoTitle>Release dates</InfoTitle>
                      <Normal>{this.renderInfos(releaseDates)}</Normal>
                    </Infos>
                  </Info3>
                  <Info4>
                    <Infos>
                      <InfoTitle>Genres</InfoTitle>
                      <Normal>{this.renderInfos(genres)}</Normal>
                    </Infos>
                    <Infos>
                      <InfoTitle>Themes</InfoTitle>
                      <Normal>{this.renderInfos(themes)}</Normal>
                    </Infos>
                  </Info4>
                </ContainerInfos>
                <ContainerScreenshots>
                  {artworks &&
                    artworks.length &&
                    artworks.map(artwork => {
                      const betterArtwork = getBetterCover(
                        artwork.url,
                        /thumb/,
                        'screenshot_med'
                      );
                      return (
                        <ArtworkContainer>
                          <Artwork
                            key={artwork.cloudinary_id}
                            src={betterArtwork}
                            alt="artwork"
                          />
                        </ArtworkContainer>
                      );
                    })}
                </ContainerScreenshots>
              </Container>
            </div>
          </React.Fragment>
        ) : (
          <div>Error</div>
        )}
        <YoutubePlayer videoId={videoId} />
      </React.Fragment>
    );
  }
}
