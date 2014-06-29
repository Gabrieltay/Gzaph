function galleriaResize(){
	var h  = ($(window).height() - $('#menu').height() - $('#flickr-row').height()) * 0.9;
	$('.galleria').height(h);
	//$('.log').text(h);
}
