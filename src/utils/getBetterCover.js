const getBetterImage = url => {
	const regex = /thumb/;
	return url.replace(regex, 'cover_uniform');
};

export default getBetterImage;