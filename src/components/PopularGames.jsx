import React from 'react';

export default class PopularGames extends React.Component {

    fetchPopularGames = () => {
        return this.props.fetchPopularGames();
    }

    componentDidMount() {
        this.fetchPopularGames();
    }

    PopularGamesItem = (game) => {
        return (<div>
                    <p>{game.name}</p>
                </div>)
    }

    render() {
        const { popularGames } = this.props;
        
        if(!popularGames.length) {
            return <p>Loading</p>
        };

        return(
            <div>
                <ul>
                    {popularGames.map( game => {
                        return <li key={game.id}>
                            {this.PopularGamesItem(game)}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
};