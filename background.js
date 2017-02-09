$(document).ready(function(){
	function addTriangleTo(target,inputColor) {
	    var dimensions = target.getClientRects()[0];
	    var pattern = Trianglify({
	        width: screen.width,
	        height: dimensions.height,
			x_colors: inputColor,
			y_colors: 'match_x'
	    });
	    target.style['background-image'] = 'url(' + pattern.png() + ')';
	}

	addTriangleTo(document.getElementById('home'),'PRGn');
	addTriangleTo(document.getElementById('education'),'PRGn');	
	addTriangleTo(document.getElementById('work-experience'),'PRGn');	
	addTriangleTo(document.getElementById('project'),'PRGn');

	
	
})



