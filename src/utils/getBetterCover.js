const getBetterCover = (
  url,
  previousSize = /thumb/,
  nextSize = 'cover_uniform'
) => {
  return url.replace(previousSize, nextSize);
};

export default getBetterCover;

//-------- formats ---------//

// cover_small 90 x 128
// screenshot_med 569 x 320
// cover_big 227 x 320
// logo_med 284 x 160
// screenshot_big 889 x 500
// screenshot_huge 1280 x 720
// thumb 	90 x 90 Thumb
// micro 	35 x 35 Thumb
// 720p 	1280 x 720 Fit
// 1080p 	1920 x 1080 Fit
