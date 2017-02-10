$(document).ready(function(){
	function addTriangleTo(target,inputColor) {
	    var dimensions = target.getClientRects()[0];
	    var pattern = Trianglify({
	        width: dimensions.width,
	        height: dimensions.height,
			x_colors: inputColor,
			y_colors: 'match_x'
	    });
	    target.style['background-image'] = 'url(' + pattern.png() + ')';
	}

	addTriangleTo(document.getElementById('home'),'Oranges');
	addTriangleTo(document.getElementById('education'),'Oranges');	
	addTriangleTo(document.getElementById('work-experience'),'Oranges');	
	addTriangleTo(document.getElementById('project'),'Oranges');

	
	
})



