import { connect } from 'react-redux';

import { likeReview, unlikeReview } from './actions';

import LikeUnlikeReview from '../../components/LikeUnlikeReview';

const mapStateToProps = state => ({
  errorLike: state.likeUnlikeReview.errorLike,
  errorUnlike: state.likeUnlikeReview.errorUnlike,
  isFetchingLike: state.likeUnlikeReview.isFetchingLike,
  isFetchingUnlike: state.likeUnlikeReview.isFetchingUnlike,
  success: state.likeUnlikeReview.success,
  token: state.account.jwt
});

const mapDispatchtoProps = dispatch => ({
  likeReview: (token, reviewid) => dispatch(likeReview(token, reviewid)),
  unlikeReview: (token, reviewid) => dispatch(unlikeReview(token, reviewid))
});

const LikeReviewcontainer = connect(mapStateToProps, mapDispatchtoProps)(
  LikeUnlikeReview
);

export default LikeReviewcontainer;
