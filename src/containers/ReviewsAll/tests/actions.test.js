import {
  FETCH_ALL_REVIEWS_REQUEST,
  FETCH_ALL_REVIEWS_FAILED,
  FETCH_ALL_REVIEWS_SUCCESS
} from '../constants';

import {
  fetchAllReviewsRequest,
  fetchAllReviewsFailed,
  fetchAllReviewsSuccess
} from '../actions';

export const data = [
  {
    id: 14,
    product_id: 19565,
    user_id: 13,
    likes_count: '0',
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_thumb/xcrfutqlaa3q81m7blmh.jpg',
      cloudinary_id: 'xcrfutqlaa3q81m7blmh',
      width: 1727,
      height: 2158
    },
    body:
      '<p>SPIDER-MAN est de retour!!!!!</p> <p><br></p> <p>Alors on se jette dans le vide et dans la ville, on se familiarise avec les déplacements de l’homme araignée (qui se résument généralement à garder la touche R2 enfoncée et à appuyer sur le bouton de saut au bon moment) et on approche de sa première mission, lourdement scriptée pour l’occasion, qui permet de coller nos premières tatanes avec le Spider-gars. Sans surprise aucune, on se retrouve avec un schéma désormais bien connu que l’on appellera "à la Arkham" avec toute l’originalité qui nous caractérise – même si, entre nous, le précurseur s’appellerait plutôt <a href="https://youtu.be/DIsb0ogloZg?t=9m51s" target="_blank"><strong>The Mark of Kri</strong></a>.</p> <p><br></p> <p>Un bouton pour les attaques classiques, un autre pour frapper de loin avec sa toile et un dernier pour l’esquive, difficile de se sentir enseveli sous les informations. Tout du moins au début du jeu puisqu’à mesure que l’on améliore notre Spider-boug, il pourra devenir un véritable foudre de guerre et les dernières bastons seront beaucoup plus amusantes et agréables (quand la caméra ne décide pas d’en faire qu’à sa tête et d’intensément se concentrer sur un mur).&nbsp;</p> <p><br></p> <p>Cerné par une demi-douzaine d’adversaires, on saute de l’un à l’autre pour leur refaire la mâchoire, on s’accroche à un échafaudage pour le faire tomber sur deux ennemis, on envoie une bombe de toile pour en ralentir trois autres avant d’aller castagner un sniper à distance pour revenir finir le boulot avec drones et gadgets. Le système de combat pourra vite devenir jouissif et permettre de nombreuses fantaisies mais il faudra d’abord dépenser un paquet de devises (et presque autant d’heures) dans les infatigables menus du jeu.</p> <p><br></p> <p>Bon jeu!!!!</p>',
    profilePicture: 'https://cdn.filestackcontent.com/efIx1yP3RESZbMHIexpc',
    userName: 'Eren',
    createdAt: '2018-09-11T20:52:34.922Z'
  },
  {
    id: 5,
    product_id: 999,
    user_id: 4,
    likes_count: '120',
    cover: {
      url:
        '//images.igdb.com/igdb/image/upload/t_thumb/xcrfutqlaa3q81m7blmh.jpg',
      cloudinary_id: 'xcrfutqlaa3q81m7blmh',
      width: 1727,
      height: 2158
    },
    body:
      '<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>',
    profilePicture: 'https://cdn.filestackcontent.com/efIx1yP3RESZbMHIexpc',
    userName: 'Eren',
    createdAt: '2018-09-11T20:55:34.922Z'
  }
];

describe('ReviewsAll actions', () => {
  describe('fetchAllReviewsRequest', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: FETCH_ALL_REVIEWS_REQUEST
      };
      expect(fetchAllReviewsRequest()).toEqual(expectedResult);
    });
  });

  describe('fetchAllReviewsFailed', () => {
    it('should return the correct type and the error', () => {
      const error = 'fetching error';
      const expectedResult = {
        type: FETCH_ALL_REVIEWS_FAILED,
        error
      };
      expect(fetchAllReviewsFailed(error)).toEqual(expectedResult);
    });
  });

  describe('fetchAllReviewsSuccess', () => {
    it('should return the correct type and pass the results', () => {
      const expectedResult = {
        type: FETCH_ALL_REVIEWS_SUCCESS,
        reviews: data
      };
      expect(fetchAllReviewsSuccess(data)).toEqual(expectedResult);
    });
  });
});
