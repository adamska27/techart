import React from 'react';
import styled from 'styled-components';

import getBetterCover from '../utils/getBetterCover';

const Container = styled.ul`
    display: grid;
    grid-auto-columns: min-content;
    /* grid-auto-rows: 1fr; */
    grid-template-areas: "game game game game";
    grid-template-rows: 1fr;    
    list-style-type: none;
`

const Cover = styled.img`
    grid-area: cover;
`

const Game = styled.div`
    display: grid;
    grid-area: game;
    grid-template-areas: 
    "cover"
    "title"
    ;
`

const Title = styled.p`
    grid-area: title;
    font-size: 11px;
    font-weight: normal;
    text-align: center;
`

export default class PopularGames extends React.Component {

    fetchPopularGames = () => {
        return this.props.fetchPopularGames();
    }

    componentDidMount() {
        this.fetchPopularGames();
    }

    PopularGamesItem = (game) => {
        const cover = getBetterCover(game.cover.url);
        return (<Game>
                    <Cover src={cover} />
                    <Title>{game.name}</Title>
                </Game>)
    }

    render() {
        const { popularGames } = this.props;
        
        if(!popularGames.length) {
            return <p>Loading</p>
        };

        return(
            <Container>
                {popularGames.map( game => {
                    return <li key={game.id}>
                        {this.PopularGamesItem(game)}
                    </li>
                })}
            </Container>
        )
    }
};